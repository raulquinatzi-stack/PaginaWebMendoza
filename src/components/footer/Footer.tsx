"use client";

import React from "react";
import Link from "next/link";
import { Scale, ShieldCheck, Terminal, Phone, Mail, MapPin, Lock } from "lucide-react";
import { useCmdStore } from "@/lib/store";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  const toggleCmd = useCmdStore((state) => state.toggleOpen);

  return (
    <footer className="bg-[#03060e] border-t border-[#c5a880]/20 text-slate-400 text-sm">
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Firm Branding & Professional Secrecy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#162544] to-[#0a1329] border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] shadow-md">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-serif uppercase">
                  Mendoza <span className="text-[#c5a880]">&</span> LEV
                </span>
                <div className="text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                  Abogados Penalistas & Fiscales
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Firma jurídica de alta especialización enfocada en la defensa penal de alto impacto,
              litigio fiscal estratégico ante el SAT y el Tribunal Federal de Justicia Administrativa,
              y prevención de delitos corporativos.
            </p>

            <div className="p-3.5 rounded-xl bg-[#070d1e] border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-[#c5a880] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>Garantía de Secreto Profesional</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Toda consulta y expediente están estrictamente amparados conforme a los Artículos 210
                y 211 del Código Penal Federal y la LFPDPPP.
              </p>
            </div>
          </div>

          {/* Col 3: Practice Areas Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/areas-de-practica#penal"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Juicio Oral Penal Acusatorio
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-practica#amparo"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Amparo Penal Urgente
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-practica#fiscal"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Litigio Fiscal Federal (TFJA)
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-practica#cuentas"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Desbloqueo de Cuentas y Sellos
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-practica#delitos-fiscales"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Delitos Fiscales (Art. 108 CFF)
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-practica#compliance"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Compliance Penal Corporativo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal Framework & Privacy */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide">
              Cumplimiento Normativo
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/aviso-de-privacidad"
                  className="text-[#c5a880] hover:underline transition-colors font-medium"
                >
                  Aviso de Privacidad Integral (LFPDPPP)
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-de-privacidad#arco"
                  className="hover:text-white transition-colors"
                >
                  Ejercicio de Derechos ARCO
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-de-privacidad#seguridad"
                  className="hover:text-white transition-colors"
                >
                  Medidas de Seguridad de Datos
                </Link>
              </li>
              <li>
                <Link
                  href="/#urgencias"
                  className="hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  Protocolo de Urgencias 24/7
                </Link>
              </li>
              <li>
                <Link
                  href="/cmd"
                  className="text-slate-500 hover:text-[#c5a880] transition-colors flex items-center gap-1 text-[11px]"
                >
                  <Lock className="w-3 h-3" />
                  <span>Portal Interno (Socios)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide">
              Sede Central
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.neighborhood}, CDMX.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-red-300 font-bold">24/7: {siteConfig.emergencyPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Oficinas: {siteConfig.telephone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>contacto@mendozalev.mx</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Bar affiliations */}
      <div className="bg-[#020409] border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mendoza & LEV Firma Legal S.C. Todos los derechos reservados.
            México.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400">Código de Ética Profesional</span>
            <span>•</span>
            <Link href="/aviso-de-privacidad" className="hover:text-slate-400">
              Privacidad y LFPDPPP
            </Link>
            <span className="text-slate-600 text-[11px]">
              v1.0 • CDMX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
