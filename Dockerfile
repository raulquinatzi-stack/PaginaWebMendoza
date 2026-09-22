# Multi-stage production Dockerfile para Mendoza & LEV Abogados
FROM node:20-alpine AS base

# Fase 1: Dependencias
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar manifiesto de dependencias
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Fase 2: Construcción (Builder)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desactivar telemetría de Next.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN node ./node_modules/next/dist/bin/next build

# Fase 3: Ejecución en Producción (Runner ultra-ligero)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Crear directorio de caché con permisos correctos
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar el paquete standalone optimizado
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
