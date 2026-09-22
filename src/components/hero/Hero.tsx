"use client";

import React from "react";
import { ShieldAlert, ArrowRight, Lock, Award, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/seo";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#060a16]"
    >
      {/* Background Decorative Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,168,128,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#001f54]/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[500px] h-[350px] bg-[#c5a880]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #c5a880 1px, transparent 1px), linear-gradient(to bottom, #c5a880 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Prestige Tagline */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge
            variant="gold"
            className="px-4 py-1.5 text-xs sm:text-sm tracking-wide border-[#c5a880]/50 uppercase bg-[#0d1833]/80 backdrop-blur-md"
          >
            <Lock className="w-3.5 h-3.5 text-[#c5a880] mr-1.5" />
            Firma Especializada en Derecho Penal y Fiscal • México
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-serif leading-[1.15] mb-6">
          Litigio Penal de <span className="gold-gradient-text">Alto Impacto</span>
          <br />
          y Defensa <span className="gold-gradient-text">Fiscal Estratégica</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Protegemos la libertad, el prestigio y el patrimonio empresarial ante contingencias
          críticas frente a la <strong>Fiscalía General de la República (FGR)</strong>,{" "}
          <strong>SAT</strong>, <strong>TFJA</strong> y el{" "}
          <strong>Poder Judicial de la Federación</strong>.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Urgent 24/7 button */}
          <a href="#urgencias" className="w-full sm:w-auto">
            <Button
              variant="urgent"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 rounded-lg flex items-center justify-center gap-3 shadow-2xl shadow-red-700/30 group"
            >
              <ShieldAlert className="w-5 h-5 animate-pulse" />
              <span>Protocolo de Urgencia 24/7</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          {/* Strategic Consultation button */}
          <a href="#contacto" className="w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 rounded-lg flex items-center justify-center gap-3 font-bold group"
            >
              <span>Agendar Consulta Confidencial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Key Metrics / Credibility stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="glass-panel p-5 rounded-xl text-left border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#c5a880] font-serif mb-1">
              +15 Años
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Especialización exclusiva en materia penal y tributaria.
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl text-left border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#c5a880] font-serif mb-1">
              +$850M MXN
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Créditos fiscales anulados de manera lisa y llana ante TFJA.
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl text-left border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#c5a880] font-serif mb-1">
              98.4%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Efectividad en juicios de amparo y no vinculaciones a proceso.
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl text-left border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-400 font-serif mb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
              24 / 7
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Guardia inmediata para detenciones, cateos y embargos.
            </div>
          </div>
        </div>

        {/* Guarantees & Trust Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
            <span>Secreto Profesional Estricto (Art. 210 CPF)</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#c5a880]" />
            <span>Litigio Federal en las 32 Entidades Federativas</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#c5a880]" />
            <span>Cumplimiento Normativo y Compliance Penal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
