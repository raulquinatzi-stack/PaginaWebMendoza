"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, ShieldAlert, Terminal, Menu, X, Scale, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCmdStore } from "@/lib/store";
import { siteConfig } from "@/lib/seo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleCmd = useCmdStore((state) => state.toggleOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleCmd();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleCmd]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060a16]/95 backdrop-blur-md border-b border-[#c5a880]/20 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#162544] to-[#0a1329] border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] group-hover:scale-105 transition-all shadow-md">
            <Scale className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider text-white font-serif uppercase group-hover:text-[#c5a880] transition-colors">
              Mendoza <span className="text-[#c5a880]">&</span> LEV
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-medium">
              Abogados Penalistas & Fiscales
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#inicio"
            className="text-sm font-medium text-slate-300 hover:text-[#c5a880] transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/#areas"
            className="text-sm font-medium text-slate-300 hover:text-[#c5a880] transition-colors"
          >
            Áreas de Práctica
          </Link>
          <Link
            href="/#urgencias"
            className="text-sm font-medium text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            Urgencias 24/7
          </Link>
          <Link
            href="/#testimonios"
            className="text-sm font-medium text-slate-300 hover:text-[#c5a880] transition-colors"
          >
            Casos de Éxito
          </Link>
          <Link
            href="/#contacto"
            className="text-sm font-medium text-slate-300 hover:text-[#c5a880] transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="/aviso-de-privacidad"
            className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            Privacidad
          </Link>
        </nav>

        {/* Quick Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* 24/7 Emergency Telephone Button */}
          <a href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, "")}`}>
            <Button
              variant="urgent"
              size="sm"
              className="flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              <ShieldAlert className="w-4 h-4 animate-bounce" />
              <span>Guardia 24/7</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-[#c5a880] focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060a16]/98 border-b border-[#c5a880]/20 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <Link
            href="/#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#c5a880]"
          >
            Inicio
          </Link>
          <Link
            href="/#areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#c5a880]"
          >
            Áreas de Práctica (Penal y Fiscal)
          </Link>
          <Link
            href="/#urgencias"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-red-400 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            Protocolo de Urgencia 24/7
          </Link>
          <Link
            href="/#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#c5a880]"
          >
            Casos de Éxito
          </Link>
          <Link
            href="/#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-[#c5a880]"
          >
            Contacto Inmediato
          </Link>
          <Link
            href="/aviso-de-privacidad"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-400 hover:text-slate-200"
          >
            Aviso de Privacidad (LFPDPPP)
          </Link>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, "")}`}>
              <Button variant="urgent" className="w-full flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Línea de Urgencia 24/7: {siteConfig.emergencyPhone}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
