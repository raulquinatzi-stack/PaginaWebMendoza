# ⚖️ Mendoza & LEV — Plataforma Web Corporativa & Sistema CMD Interno

Plataforma digital de alta gama desarrollada para la firma jurídica **Mendoza & LEV**, despacho especializado en **Derecho Penal de Alto Impacto** y **Estrategia & Defensa Fiscal** en la Ciudad de México y ámbito federal.

---

## 🏛️ Características Principales

1. **Identidad Visual Ejecutiva & Prestigio Jurídico**:
   - Paleta corporativa sobria (Azul Marino Profundo `#0A1128`, Oro Cálido `#D4AF37`, Blanco Hueso).
   - Tipografía moderna y responsiva con micro-interacciones sutiles.
   - Conteo y estadísticas de impacto: +15 años de experiencia, 98.4% de efectividad en juicio, +850 MDP protegidos ante el SAT.

2. **Triage de Urgencias Jurídicas 24/7**:
   - Asistente interactivo guiado paso a paso para casos críticos:
     - Detenciones en flagrancia / Citatorios ministeriales (CNPP).
     - Congelamiento de cuentas bancarias (UIF / CNBV).
     - Auditorías y revisiones de gabinete del SAT.
     - Juicios de Amparo Urgente con solicitud de suspensión provisional.
   - Conexión directa a línea telefónica de emergencia y canal prioritario de WhatsApp.

3. **Áreas de Práctica Detalladas**:
   - **Derecho Penal**: Delitos de cuello blanco, defensa en sistema acusatorio adversarial oral, amparo penal y compliance penal corporativo.
   - **Derecho Fiscal**: Cancelación de créditos fiscales, defensa contra sellos digitales bloqueados (Art. 17-H Bis CFF), litigio ante el TFJA y planeación fiscal preventiva.

4. **Aviso de Privacidad Integral Conforme a Ley Mexicana**:
   - Redactado en estricto cumplimiento con la **LFPDPPP**, su Reglamento, y el Secreto Profesional (Arts. 210 y 211 del Código Penal Federal).
   - Procedimiento documentado y canal dedicado para el ejercicio de derechos **ARCO** (Acceso, Rectificación, Cancelación y Oposición).

5. **Sistema CMD Interno de Administración (Portal Privado)**:
   - Acceso discreto exclusivo para socios mediante `Ctrl + K`, ruta privada `/cmd` o enlace en el pie de página.
   - Terminal interactiva CLI con comandos:
     - `help`: Lista de comandos del sistema.
     - `cases`: Listado de expedientes penales y fiscales activos.
     - `stats`: Resumen estadístico y métricas de litigio.
     - `new <expediente> <cliente> <materia> <etapa>`: Registro de nuevos asuntos.
     - `status`: Estado del servidor y del entorno de base de datos.
     - `export`: Exportación de expedientes en formato JSON.
   - **Persistencia local offline** impulsada por **IndexedDB (Dexie.js)** y gestión de estado reactiva con **Zustand**.

6. **SEO & Datos Estructurados**:
   - Meta tags optimizados con Open Graph y Twitter Cards.
   - Schema JSON-LD de tipo `LegalService` configurado para geolocalización en CDMX y México.

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19, Server & Client Components)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Gestión de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Base de Datos del Portal Interno**: [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
- **Contenedorización**: [Docker](https://www.docker.com/) & Docker Compose (Alpine Node 20 Multi-stage)

---

## 🚀 Despliegue y Ejecución Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) v18.18+ o v20+
- npm o yarn

### 1. Instalación de Dependencias
```bash
npm install
```

### 2. Modo Desarrollo
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000).

### 3. Compilación de Producción
```bash
npm run build
npm start
```

### 4. Ejecución Rápida en Windows (1-Click)
Haz doble clic sobre el archivo `iniciar-proyecto.bat` en la raíz del proyecto para iniciar automáticamente el servidor de producción optimizado.

### 5. Despliegue con Docker Compose
```bash
docker compose up -d --build
```
Accede en `http://localhost:3000`.

---

## 🔒 Acceso al Sistema CMD Interno

- **Atajo de Teclado**: Presiona `Ctrl + K` (o `Cmd + K` en macOS) desde cualquier página pública.
- **Ruta Directa**: Ingresa a `/cmd`.
- **Pie de Página**: Enlace discreto "🔒 Portal Interno (Socios)".

---

## 📄 Licencia y Confidencialidad
© 2026 Mendoza & LEV Abogados S.C. Todos los derechos reservados. Confidencialidad y secreto profesional garantizados conforme al Código Penal Federal de los Estados Unidos Mexicanos.
