"use client";

import React, { useState } from "react";
import { MessageSquare, X, ShieldAlert, PhoneCall, Scale } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export function FloatingWhatsApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getWhatsappUrl = (text: string) => {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {menuOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-[#091122]/95 border border-[#c5a880]/40 p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#c5a880]">
                Guardia Legal Activa
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            Seleccione la materia de su consulta para comunicarlo de inmediato con el socio especialista de turno:
          </p>

          <div className="space-y-2">
            <a
              href={getWhatsappUrl(
                "URGENCIA PENAL: Solicito asistencia urgente para una detención / comparecencia ministerial."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-red-950/60 border border-red-800/40 text-red-200 hover:bg-red-900/60 transition-colors text-xs font-semibold"
            >
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>Urgencia Penal / Detención 24/7</span>
            </a>

            <a
              href={getWhatsappUrl(
                "DEFENSA FISCAL: Requiero asesoría por auditoría del SAT o congelamiento de cuentas bancarias."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0d1a38] border border-[#c5a880]/30 text-slate-200 hover:bg-[#13244d] transition-colors text-xs font-semibold"
            >
              <Scale className="w-4 h-4 text-[#c5a880] shrink-0" />
              <span>Defensa Fiscal SAT / Embargo</span>
            </a>

            <a
              href={getWhatsappUrl(
                "CONSULTA GENERAL: Deseo programar una cita confidencial con un socio de Mendoza & LEV."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0b1429] border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors text-xs font-medium"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Agendar Consulta Ordinaria</span>
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500 text-center">
            Respuesta promedio: &lt; 10 minutos
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/80 hover:brightness-110 transition-all duration-200 cursor-pointer active:scale-95 border border-emerald-400/40"
        aria-label="Abrir chat de WhatsApp de guardia"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#060a16] animate-pulse" />
        <MessageSquare className="w-6 h-6 text-white" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide uppercase">
          WhatsApp 24/7
        </span>
      </button>
    </div>
  );
}
