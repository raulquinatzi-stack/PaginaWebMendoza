"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  PhoneCall,
  AlertTriangle,
  MessageSquare,
  Scale,
  Landmark,
  FileWarning,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/seo";

interface UrgencyScenario {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  primaryAction: string;
  protocolSteps: string[];
  whatsappMessage: string;
}

const scenarios: UrgencyScenario[] = [
  {
    id: "detencion",
    title: "Detención en MP o Policía / Orden de Aprehensión",
    badge: "Urgencia Penal Inmediata",
    icon: ShieldAlert,
    description:
      "Si usted o un familiar ha sido puesto a disposición del Ministerio Público (local o federal) o enfrenta una orden de aprehensión inminente.",
    primaryAction: "Asistencia Penal de Guardia en Sede Ministerial",
    protocolSteps: [
      "Ejerza su derecho constitucional a guardar silencio (Art. 20 Constitucional Apartado B). Ninguna declaración previa a la llegada de su abogado defensor es obligatoria.",
      "No firme actas, entrevistas ni consentimientos sin la lectura y autorización expresa de su abogado defensor.",
      "Exija formalmente la presencia de un abogado particular de confianza de Mendoza & LEV.",
      "Nuestros abogados penalistas se apersonan de inmediato en el Centro de Justicia o Fiscalía correspondiente.",
    ],
    whatsappMessage:
      "URGENCIA PENAL: Requiero asistencia inmediata de guardia para una detención activa / presentación ante el Ministerio Público. Por favor responder urgente.",
  },
  {
    id: "cuentas",
    title: "Inmovilización de Cuentas Bancarias por el SAT / UIF",
    badge: "Urgencia Fiscal & Patrimonial",
    icon: Landmark,
    description:
      "Bloqueo preventivo de cuentas bancarias de la empresa o directivos dictado por el Servicio de Administración Tributaria o la Unidad de Inteligencia Financiera.",
    primaryAction: "Amparo Indirecto con Suspensión Provisional Urgente",
    protocolSteps: [
      "Solicite al banco el oficio exacto que motivó la inmovilización de fondos y su número de folio.",
      "No acepte determinaciones automáticas ni pagos de autocorrección forzados para liberar las cuentas.",
      "Presentación inmediata de Demanda de Juicio de Amparo Indirecto solicitando la suspensión provisional del acto reclamado.",
      "Liberación de fondos necesarios para nóminas y operatividad empresarial esencial en sede judicial.",
    ],
    whatsappMessage:
      "URGENCIA FISCAL: Mis cuentas bancarias han sido inmovilizadas por el SAT / UIF. Requiero asesoría técnica para suspensión inmediata y amparo.",
  },
  {
    id: "visita",
    title: "Visita Domiciliaria / Última Acta Parcial del SAT",
    badge: "Auditoría en Curso",
    icon: FileWarning,
    description:
      "Auditores del SAT se encuentran en el domicilio fiscal o han notificado la Última Acta Parcial / Oficio de Observaciones.",
    primaryAction: "Contención Legal y Desvirtuamiento Probatorio",
    protocolSteps: [
      "Verifique las credenciales vigentes de los visitadores y solicite copia íntegra de la orden de visita.",
      "El plazo para desvirtuar las observaciones de la última acta parcial es fatal (20 días hábiles conforme al Art. 46 CFF).",
      "No proporcione documentación o explicaciones adicionales que no hayan sido formalmente requeridas por escrito.",
      "El equipo fiscal de Mendoza & LEV interviene para blindar la contabilidad y preparar el escrito de pruebas.",
    ],
    whatsappMessage:
      "AUDITORÍA FISCAL: Tengo auditores del SAT en mi domicilio / Recibí Última Acta Parcial. Requiero defensa estratégica urgente.",
  },
  {
    id: "citatorio",
    title: "Citatorio para Audiencia Inicial en Juzgado de Control",
    badge: "Proceso Penal Acusatorio",
    icon: Scale,
    description:
      "Ha recibido una cédula de notificación del Poder Judicial de la Federación o Tribunal Superior de Justicia para formulación de imputación.",
    primaryAction: "Acceso Inmediato a Carpeta y Preparación Técnica",
    protocolSteps: [
      "No falte a la audiencia sin justificación jurídica; el desacato puede originar una orden de comparecencia por la fuerza pública o aprehensión.",
      "Su abogado defensor debe solicitar copia íntegra de la carpeta de investigación con antelación a la audiencia.",
      "Diseño de la teoría del caso y peritajes de refutación previos a la audiencia de vinculación a proceso.",
      "Estrategia de litigación oral para evitar la imposición de prisión preventiva justificada.",
    ],
    whatsappMessage:
      "CITATORIO JUDICIAL: Recibí citatorio para audiencia inicial penal. Necesito representación técnica para comparecer y evitar medidas cautelares.",
  },
];

export function EmergencyTriage() {
  const [selectedId, setSelectedId] = useState<string>("detencion");
  const currentScenario = scenarios.find((s) => s.id === selectedId) || scenarios[0];

  const getWhatsappUrl = (msg: string) => {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="urgencias" className="py-24 bg-[#050914] relative border-y border-red-900/30">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-950/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
            <Badge variant="urgent" className="px-3 py-1 text-xs uppercase tracking-widest">
              Asistencia Inmediata 24 Horas / 365 Días
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Protocolo de <span className="text-red-500">Ayuda Rápida & Urgencias</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            En materia penal y fiscal, las primeras horas determinan el éxito o fracaso del litigio.
            Seleccione su situación para conocer el protocolo legal inmediato y comunicarse con nuestro equipo de guardia.
          </p>
        </div>

        {/* Emergency Scenarios Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {scenarios.map((sc) => {
            const Icon = sc.icon;
            const isSelected = sc.id === selectedId;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedId(sc.id)}
                className={`flex flex-col p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#111827] border-red-500/80 shadow-lg shadow-red-950/40 ring-1 ring-red-500"
                    : "bg-[#091122]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0c152a]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? "bg-red-900/60 text-red-300 border border-red-600/50"
                        : "bg-slate-800/80 text-slate-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {sc.badge}
                  </span>
                </div>
                <div className="font-bold text-sm sm:text-base text-white line-clamp-2">
                  {sc.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Guidance Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border-red-900/40 bg-gradient-to-b from-[#0e1628] to-[#070c1a] shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* Left Column: Guidelines and Steps */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                  {currentScenario.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentScenario.description}
              </p>

              <div className="bg-[#080e1e]/80 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs uppercase tracking-wider text-[#c5a880] font-bold mb-1">
                  Estrategia Jurídica Inmediata:
                </div>
                <div className="text-sm font-semibold text-white">
                  {currentScenario.primaryAction}
                </div>
              </div>

              {/* Step by step checklist */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Protocolo de Contingencia Obligatorio:
                </div>
                <ul className="space-y-2.5">
                  {currentScenario.protocolSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Direct Dispatch CTAs */}
            <div className="w-full lg:w-96 bg-[#070b16] border border-red-900/50 p-6 sm:p-8 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-widest mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Respuesta Garantizada &lt; 15 min</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Activar Abogado de Guardia
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Comuníquese de inmediato. Su llamada o mensaje será atendido en tiempo real por un
                  abogado socio penalista o fiscalista con cédula federal.
                </p>
              </div>

              <div className="space-y-3">
                {/* WhatsApp Dispatch */}
                <a
                  href={getWhatsappUrl(currentScenario.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="urgent"
                    className="w-full py-6 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-bold shadow-lg shadow-red-700/40"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp de Guardia</span>
                  </Button>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, "")}`}
                  className="block w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full py-5 flex items-center justify-center gap-2 text-sm border-slate-700 hover:border-red-500 text-slate-200"
                  >
                    <PhoneCall className="w-4 h-4 text-red-400" />
                    <span>Llamar: {siteConfig.emergencyPhone}</span>
                  </Button>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 text-center">
                Atención con estricto secreto profesional bajo los Artículos 210 y 211 del Código Penal Federal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
