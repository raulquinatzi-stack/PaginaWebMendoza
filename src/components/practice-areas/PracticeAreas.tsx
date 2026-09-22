"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Gavel,
  Landmark,
  ShieldCheck,
  FileSpreadsheet,
  Building,
  Scale,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PracticeArea {
  id: string;
  category: "penal" | "fiscal" | "compliance";
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  highlights: string[];
  legalBasis: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "juicio-oral-penal",
    category: "penal",
    title: "Defensa Penal Técnica en Juicio Oral Acusatorio",
    shortDesc:
      "Representación en audiencias de control, vinculación a proceso y debate de juicio oral.",
    fullDesc:
      "Defensa integral y estratégica en el Sistema de Justicia Penal Acusatorio adversarial. Asistimos a directivos, accionistas y personas físicas en audiencias iniciales de control de detención, debate de medidas cautelares (evitando la prisión preventiva justificada) e interrogatorio pericial en juicio oral.",
    icon: Gavel,
    highlights: [
      "Audiencias de Control de Detención e Imputación",
      "Estrategia de No Vinculación a Proceso",
      "Medidas Cautelares en Libertad",
      "Teoría del Caso y Peritajes de Refutación",
    ],
    legalBasis: "Código Nacional de Procedimientos Penales (CNPP)",
  },
  {
    id: "amparo-penal",
    category: "penal",
    title: "Juicio de Amparo Penal Urgente",
    shortDesc:
      "Suspensión provisional y definitiva contra órdenes de aprehensión, cateos y aseguramientos.",
    fullDesc:
      "Tramitación expedita de amparos indirectos ante Juzgados de Distrito en Materia Penal. Obtención de suspensiones provisionales inmediatas para evitar privaciones ilegales de la libertad, aseguramientos ilícitos de bienes inmuebles o cuentas bancarias, y reclamo de violaciones graves a derechos fundamentales.",
    icon: Scale,
    highlights: [
      "Suspensión Provisional en menos de 24 horas",
      "Protección contra Órdenes de Aprehensión y Comparecencia",
      "Desbloqueo de Inmuebles Asegurados por Fiscalía",
      "Amparo Directo contra Sentencias Definitivas",
    ],
    legalBasis: "Ley de Amparo, Reglamentaria de los Arts. 103 y 107 Constitucionales",
  },
  {
    id: "litigio-fiscal-tfja",
    category: "fiscal",
    title: "Litigio Fiscal Contencioso Administrativo (TFJA)",
    shortDesc:
      "Juicio de Nulidad ante el Tribunal Federal de Justicia Administrativa contra resoluciones del SAT.",
    fullDesc:
      "Defensa legal especializada en la anulación lisa y llana de determinaciones de créditos fiscales multimillonarios. Combatimos auditorías viciadas de origen, presunciones ilegales de ingresos, rechazo arbitrario de deducciones e interpretaciones indebidas de las normas fiscales federales.",
    icon: Landmark,
    highlights: [
      "Nulidad Lisa y Llana de Créditos Fiscales",
      "Impugnación de Resoluciones de la AGACE y Grandes Contribuyentes",
      "Suspensión del Procedimiento Administrativo de Ejecución (PAE)",
      "Recurso de Revocación Administrativo Estratégico",
    ],
    legalBasis: "Ley Federal de Procedimiento Contencioso Administrativo y CFF",
  },
  {
    id: "desbloqueo-sellos-cuentas",
    category: "fiscal",
    title: "Desbloqueo de Cuentas y Sellos Digitales (CSD)",
    shortDesc:
      "Recuperación urgente del Certificado de Sello Digital (Art. 17-H Bis) y descongelamiento de fondos.",
    fullDesc:
      "Acción prioritaria ante la restricción temporal de Certificados de Sello Digital que paralizan la facturación de la empresa. Interponemos procedimientos de aclaración inmediata, medidas cautelares y juicios de amparo para salvaguardar la viabilidad operativa y la liquidez de la organización.",
    icon: FileSpreadsheet,
    highlights: [
      "Restablecimiento de Sellos Digitales en días hábiles",
      "Descongelamiento de Cuentas Bancarias Operativas",
      "Aclaración expedita ante la Administración Desconcentrada",
      "Garantía del Interés Fiscal sin descapitalización",
    ],
    legalBasis: "Artículos 17-H, 17-H Bis y 156-Bis del Código Fiscal de la Federación",
  },
  {
    id: "delitos-fiscales",
    category: "compliance",
    title: "Defensa en Delitos Fiscales & Art. 69-B CFF",
    shortDesc:
      "Defensa en investigaciones por defraudación fiscal, simulación de operaciones y facturación ilícita.",
    fullDesc:
      "Litigio de alta complejidad en la frontera entre el derecho penal y el fiscal. Representamos a empresas acusadas de compraventa de comprobantes fiscales presuntamente inexistentes (EFOS/EDOS), defraudación fiscal calificada (Art. 108 CFF) y equiparadas, integrando la materialidad operativa tangible de cada operación mercantil.",
    icon: ShieldCheck,
    highlights: [
      "Desvirtuamiento de la presunción del Art. 69-B CFF",
      "Defensa penal en Querellas por Defraudación Fiscal",
      "Acreditación de Materialidad de Servicios e Intangibles",
      "Soluciones anticipadas y Acuerdos Conclusivos PRODECON",
    ],
    legalBasis: "Arts. 69-B, 108, 109 y 113-Bis del Código Fiscal de la Federación",
  },
  {
    id: "compliance-penal",
    category: "compliance",
    title: "Compliance Penal Corporativo & Blindaje Fiscal",
    shortDesc:
      "Diseño de modelos de prevención de responsabilidad penal para personas jurídicas (Art. 421 CNPP).",
    fullDesc:
      "Implementación de programas de integridad corporativa y debido control organizacional para eximir a la empresa de responsabilidad penal. Diagnóstico preventivo de riesgos penales tributarios para miembros del Consejo de Administración, comisarios, directores generales y apoderados legales con facultades de dominio.",
    icon: Building,
    highlights: [
      "Eximente de Responsabilidad Penal de la Empresa",
      "Manuales de Cumplimiento Tributario y PLA/FT (UIF)",
      "Protección patrimonial y penal de Administradores Únicos",
      "Auditorías preventivas de riesgos legales fiscales",
    ],
    legalBasis: "Artículo 421 del CNPP y Ley Federal de Extinción de Dominio",
  },
];

export function PracticeAreas() {
  const [filter, setFilter] = useState<"all" | "penal" | "fiscal" | "compliance">("all");

  const filteredAreas =
    filter === "all"
      ? practiceAreas
      : practiceAreas.filter((item) => item.category === filter);

  return (
    <section id="areas" className="py-24 bg-[#060a16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="gold" className="mb-3 uppercase tracking-widest text-xs">
              Especialización Jurídica Exclusiva
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
              Áreas de <span className="gold-gradient-text">Práctica Principal</span>
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            No somos un despacho generalista. Concentramos todos nuestros recursos intelectuales y
            procesales en dos ramas interconectadas de máxima exigencia: el Derecho Penal y el Derecho Fiscal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[#c5a880] text-[#060a16] shadow-lg shadow-[#c5a880]/20"
                : "bg-[#0c1427] text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            Todas las Especialidades ({practiceAreas.length})
          </button>
          <button
            onClick={() => setFilter("penal")}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "penal"
                ? "bg-[#c5a880] text-[#060a16] shadow-lg shadow-[#c5a880]/20"
                : "bg-[#0c1427] text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            Derecho Penal de Alto Impacto
          </button>
          <button
            onClick={() => setFilter("fiscal")}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "fiscal"
                ? "bg-[#c5a880] text-[#060a16] shadow-lg shadow-[#c5a880]/20"
                : "bg-[#0c1427] text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            Derecho Fiscal & Litigio SAT
          </button>
          <button
            onClick={() => setFilter("compliance")}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "compliance"
                ? "bg-[#c5a880] text-[#060a16] shadow-lg shadow-[#c5a880]/20"
                : "bg-[#0c1427] text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            Delitos Fiscales & Compliance
          </button>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.id}
                className="glass-panel glass-panel-hover border-slate-800/80 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top decorative line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5a880]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#111e3b] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] group-hover:scale-110 group-hover:border-[#c5a880] transition-all shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge
                        variant="gold"
                        className="text-[10px] uppercase tracking-wider bg-black/40 border-[#c5a880]/30"
                      >
                        {area.category === "penal"
                          ? "Materia Penal"
                          : area.category === "fiscal"
                          ? "Materia Fiscal"
                          : "Penal Tributario"}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif text-white group-hover:text-[#c5a880] transition-colors leading-tight">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-xs mt-2">
                      Fundamento: <span className="text-slate-300 italic">{area.legalBasis}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">{area.fullDesc}</p>

                    <div className="pt-2 border-t border-slate-800/60">
                      <div className="text-xs uppercase font-semibold tracking-wider text-slate-400 mb-2">
                        Alcance Procesal:
                      </div>
                      <ul className="space-y-1.5">
                        {area.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-slate-800/40">
                  <a href="#contacto" className="w-full block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-between group-hover:bg-[#c5a880]/15 group-hover:border-[#c5a880] text-xs font-semibold"
                    >
                      <span>Consultar Asunto Específico</span>
                      <ArrowUpRight className="w-4 h-4 text-[#c5a880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0b152d] via-[#101c3d] to-[#0b152d] border border-[#c5a880]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white font-serif mb-1">
              ¿Tiene un caso complejo que combina materia penal y fiscal?
            </h3>
            <p className="text-sm text-slate-400">
              La defraudación fiscal y los delitos financieros requieren una coordinación simultánea entre litigantes penales y fiscalistas.
            </p>
          </div>
          <a href="#contacto" className="shrink-0">
            <Button variant="gold" size="lg" className="font-bold">
              Diseñar Estrategia Conjunta
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
