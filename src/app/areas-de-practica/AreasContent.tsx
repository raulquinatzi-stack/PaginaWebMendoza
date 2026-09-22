"use client";

import React from "react";
import Link from "next/link";
import { Scale, Gavel, Landmark, ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AreasContent() {
  return (
    <div className="min-h-screen bg-[#060a16] text-slate-300 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-xs border-slate-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la Página Principal</span>
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-3 uppercase tracking-widest text-xs">
            Excelencia Técnica en Litigio
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Áreas de Especialización <span className="gold-gradient-text">Penal & Fiscal</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Profundidad doctrinal, experiencia en salas de juicio oral y dominio técnico de la
            contabilidad forense tributaria en México.
          </p>
        </div>

        {/* Section 1: Derecho Penal */}
        <div id="penal" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#121f3d] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
              <Gavel className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                1. Derecho Penal de Alto Impacto & Juicio Oral Acusatorio
              </h2>
              <div className="text-xs text-[#c5a880] uppercase tracking-wider">
                Defensa Técnica Federal y Local en las 32 Entidades Federativas
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-panel border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-white font-serif">
                  Sistema de Justicia Penal Acusatorio (CNPP)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-slate-300 space-y-3">
                <p>
                  Representamos a directores generales, apoderados legales y particulares en todas las etapas del procedimiento penal acusatorio:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Control de detención ministerial y judicial en plazo constitucional de 48/72 hrs.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Debate de vinculación a proceso y desahogo de datos y medios de prueba.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Litigación oral sobre medidas cautelares alternativas a la prisión preventiva.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Interrogatorio y contrainterrogatorio pericial en audiencia de juicio oral.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="amparo" className="glass-panel border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-white font-serif">
                  Juicio de Amparo Penal Urgente
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-slate-300 space-y-3">
                <p>
                  El juicio de amparo es la herramienta fundamental de contención frente a actos arbitrarios del poder público:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Amparo contra órdenes de aprehensión y de comparecencia con fuerza pública.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Suspensión provisional expedita con efectos restitutorios inmediatos.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Impugnación de aseguramientos de cuentas bancarias y bienes inmuebles.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Recursos de queja y revisión penal ante Tribunales Colegiados de Circuito.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: Derecho Fiscal */}
        <div id="fiscal" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#121f3d] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                2. Derecho Fiscal Estratégico & Litigio ante el SAT / TFJA
              </h2>
              <div className="text-xs text-[#c5a880] uppercase tracking-wider">
                Defensa Contenciosa Tributaria de Personas Morales y Físicas
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-panel border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-white font-serif">
                  Juicio de Nulidad Federal (TFJA)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-slate-300 space-y-3">
                <p>
                  Impugnación formal de liquidaciones fiscales arbitrarias ante Salas Regionales y Sala Superior del Tribunal Federal de Justicia Administrativa:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Nulidad lisa y llana por vicios de legalidad, caducidad y prescripción.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Suspensión del Procedimiento Administrativo de Ejecución (PAE) y cobro coactivo.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Desvirtuamiento de rechazo de pérdidas fiscales y deducciones autorizadas.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="cuentas" className="glass-panel border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-white font-serif">
                  Desbloqueo de Sellos Digitales y Cuentas Bancarias
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-slate-300 space-y-3">
                <p>
                  Acciones contundentes para restablecer la operatividad comercial inmediata de la compañía:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Aclaración y reactivación del Certificado de Sello Digital (Art. 17-H Bis CFF).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Juicio de amparo contra el congelamiento preventivo de cuentas bancarias (Art. 156-Bis CFF).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Liberación de fondos indispensables para nómina y seguridad social.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 3: Delitos Fiscales & Compliance */}
        <div id="delitos-fiscales" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#121f3d] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                3. Delitos Fiscales (Art. 108 CFF) & Compliance Penal Corporativo
              </h2>
              <div className="text-xs text-[#c5a880] uppercase tracking-wider">
                Defensa y Prevención en la Intersección Penal-Tributaria
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-panel border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-white font-serif">
                  Defraudación Fiscal & Art. 69-B CFF
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-slate-300 space-y-3">
                <p>
                  Atención integral a querellas formuladas por la Procuraduría Fiscal de la Federación:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Defensa en investigaciones por presunta simulación de operaciones mercantiles.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Acreditación pericial de materialidad económica tangible de servicios.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Negociación estratégica de Acuerdos Conclusivos ante PRODECON.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="compliance" className="glass-panel border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-white font-serif">
                  Blindaje y Responsabilidad Penal de las Empresas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-slate-300 space-y-3">
                <p>
                  Modelos de prevención de riesgos penales para la protección de directivos y accionistas:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Programas de debido control organizacional conforme al Artículo 421 del CNPP.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Blindaje de consejeros frente a responsabilidad penal solidaria tributaria.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Auditorías de prevención de lavado de dinero (UIF) y financiamiento ilícito.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0d1833] via-[#162752] to-[#0d1833] border border-[#c5a880]/30 text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl font-bold text-white font-serif">
            ¿Requiere Asesoría Inmediata en alguna de estas materias?
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Nuestros socios analizan cada caso con estricta confidencialidad. Contáctenos hoy mismo para una sesión de diagnóstico inicial.
          </p>
          <div className="pt-2">
            <Link href="/#contacto">
              <Button variant="gold" size="lg" className="font-bold">
                Agendar Consulta Estratégica
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
