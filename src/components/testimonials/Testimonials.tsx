"use client";

import React from "react";
import { Quote, Star, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SuccessCase {
  id: string;
  clientTitle: string;
  matter: "Derecho Penal" | "Derecho Fiscal" | "Delito Fiscal";
  resolution: string;
  financialOrFreedomImpact: string;
  quote: string;
  court: string;
  caseRef: string;
}

const successCases: SuccessCase[] = [
  {
    id: "case-1",
    clientTitle: "Director General • Grupo Industrial Automotriz",
    matter: "Derecho Fiscal",
    resolution: "Nulidad Lisa y Llana de Crédito Fiscal",
    financialOrFreedomImpact: "$46.8 Millones de Pesos Cancelados",
    quote:
      "El SAT nos determinó un crédito fiscal infundado desconociendo compras de insumos estratégicos. El equipo de Mendoza & LEV desarticuló los argumentos de la AGACE ante el TFJA con una pericial contable irrebatible. Obtuvimos la sentencia absolutoria y la liberación total de nuestras garantías bancarias.",
    court: "Tribunal Federal de Justicia Administrativa • Sala Superior",
    caseRef: "Juicio Contencioso Federal • Exp. 2918/24-17-01-9",
  },
  {
    id: "case-2",
    clientTitle: "Presidente del Consejo de Administración • Holding Inmobiliario",
    matter: "Derecho Penal",
    resolution: "Auto de No Vinculación a Proceso & Levantamiento de Cautelares",
    financialOrFreedomImpact: "Libertad Absoluta y Protección de Patrimonio",
    quote:
      "Enfrentamos una carpeta de investigación fabricada por presuntos delitos patrimoniales. Desde la audiencia inicial en el Centro de Justicia Federal, los litigantes de Mendoza & LEV pulverizaron la imputación del Ministerio Público. Demostraron que se trataba de una disputa civil, logrando el sobreseimiento inmediato.",
    court: "Poder Judicial de la Federación • Reclusorio Sur CDMX",
    caseRef: "Causa Penal Federal • Control 142/2025",
  },
  {
    id: "case-3",
    clientTitle: "Directora Jurídica • Empresa de Logística y Comercio Exterior",
    matter: "Delito Fiscal",
    resolution: "Suspensión Definitiva de Amparo & Desvirtuamiento Art. 69-B CFF",
    financialOrFreedomImpact: "Descongelamiento de 8 Cuentas Bancarias Operativas",
    quote:
      "La inmovilización sorpresiva de nuestras cuentas ponía en riesgo el pago de nómina de más de 400 colaboradores. En menos de 48 horas, Mendoza & LEV tramitó el amparo indirecto con suspensión provisional concedida, permitiéndonos seguir operando mientras desvirtuábamos las observaciones del SAT.",
    court: "Juzgado Sexto de Distrito en Materia Administrativa en CDMX",
    caseRef: "Juicio de Amparo Indirecto • 883/2025-V",
  },
  {
    id: "case-4",
    clientTitle: "Socio Fundador • Corporativo Farmacéutico Nacional",
    matter: "Derecho Penal",
    resolution: "Amparo Concedido contra Orden de Aprehensión Ilegal",
    financialOrFreedomImpact: "Certeza Jurídica Plena sin Privación de Libertad",
    quote:
      "La serenidad, el dominio técnico del juicio de amparo y la disponibilidad 24/7 del equipo de Mendoza & LEV marcaron la diferencia. Fueron transparentes en la viabilidad desde el primer día y ejecutaron una defensa impecable frente a presiones ministeriales desmedidas.",
    court: "Primer Tribunal Colegiado en Materia Penal del Primer Circuito",
    caseRef: "Amparo en Revisión Penal • 412/2024",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-[#050914] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-3 uppercase tracking-widest text-xs">
            Eficacia Comprobada en Tribunales
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Casos de Éxito & <span className="gold-gradient-text">Resultados Obtenidos</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Por estricta observancia del secreto profesional y la protección de datos conforme a la
            legislación mexicana, los nombres de nuestros clientes han sido anonimizados preservando
            la veracidad procesal de cada resolución judicial.
          </p>
        </div>

        {/* Success Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successCases.map((item) => (
            <Card
              key={item.id}
              className="glass-panel p-8 rounded-2xl border-slate-800/80 hover:border-[#c5a880]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1 text-[#c5a880]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a880]" />
                    ))}
                  </div>
                  <Badge
                    variant="gold"
                    className="text-[10px] tracking-wider uppercase bg-[#0f1b38] border-[#c5a880]/30"
                  >
                    {item.matter}
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{item.resolution}</span>
                  </div>
                  <div className="text-lg font-bold text-white font-serif">
                    {item.financialOrFreedomImpact}
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-[#c5a880]/40 my-6">
                  <Quote className="w-5 h-5 text-[#c5a880]/40 absolute -top-2 -left-3 bg-[#050914] p-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                <div>
                  <span className="font-semibold text-slate-200">{item.clientTitle}</span>
                  <div className="text-[11px] text-slate-500">{item.court}</div>
                </div>
                <div className="text-[10px] font-mono text-[#c5a880]/70 bg-black/40 px-2 py-1 rounded border border-slate-800 shrink-0">
                  {item.caseRef}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 p-6 rounded-xl bg-[#091122]/60 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
            <span>Cero Filtraciones de Información Confidencial</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#c5a880]" />
            <span>Membresía Activa en la Barra Mexicana de Abogados</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#c5a880]" />
            <span>Certificación en Litigación Oral Penal Federal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
