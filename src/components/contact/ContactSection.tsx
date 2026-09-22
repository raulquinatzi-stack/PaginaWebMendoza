"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/db";
import { siteConfig } from "@/lib/seo";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    matterType: "penal" as "penal" | "fiscal" | "delito_fiscal" | "urgencia",
    urgencyLevel: "alta" as "inmediata" | "alta" | "media",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedFolio, setSubmittedFolio] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      if (!formData.fullName || !formData.phone || !formData.description) {
        setErrorMessage("Por favor complete los campos obligatorios (Nombre, Teléfono y Asunto).");
        setIsSubmitting(false);
        return;
      }

      // Guardar directamente en la base de datos IndexedDB local
      const id = await db.leads.add({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        matterType: formData.matterType,
        urgencyLevel: formData.urgencyLevel,
        description: formData.description,
        status: "nuevo",
        createdAt: new Date().toISOString(),
        notes: "Registrado vía formulario web cifrado.",
      });

      // Registro de auditoría interno
      await db.auditLogs.add({
        timestamp: new Date().toISOString(),
        action: "LEAD_WEB_RECIBIDO",
        command: `lead insert --id=${id}`,
        user: "PORTAL_WEB",
        details: `Nuevo prospecto en materia ${formData.matterType} con urgencia ${formData.urgencyLevel}.`,
      });

      const folio = `ML-${new Date().getFullYear()}-${id.toString().padStart(4, "0")}`;
      setSubmittedFolio(folio);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        matterType: "penal",
        urgencyLevel: "alta",
        description: "",
      });
    } catch (err) {
      console.error(err);
      setErrorMessage("Ocurrió un inconveniente al guardar. Por favor llámenos directamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      "Hola Mendoza & LEV Abogados. Deseo agendar una consulta estratégica confidencial en materia legal."
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 bg-[#060a16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-3 uppercase tracking-widest text-xs">
            Atención Inmediata y Confidencial
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Contacto Directo & <span className="gold-gradient-text">Consulta Estratégica</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Inicie el contacto con un socio especialista. Toda comunicación recibida se encuentra
            amparada irrevocablemente por el <strong>Secreto Profesional</strong> de la abogacía en México.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and office location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-2xl border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-serif border-b border-slate-800 pb-4">
                Canales de Comunicación Prioritaria
              </h3>

              {/* Emergency Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-700/50 flex items-center justify-center text-red-400 shrink-0">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-red-400 tracking-wider">
                    Línea de Urgencias 24 Horas
                  </div>
                  <a
                    href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, "")}`}
                    className="text-lg font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {siteConfig.emergencyPhone}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Detenciones, cateos y congelamiento de cuentas.
                  </div>
                </div>
              </div>

              {/* Office Switchboard */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f1b38] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#c5a880] tracking-wider">
                    Conmutador Oficinas CDMX
                  </div>
                  <a
                    href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`}
                    className="text-lg font-bold text-white hover:text-[#c5a880] transition-colors"
                  >
                    {siteConfig.telephone}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Lunes a Viernes de 08:30 a 20:00 hrs.
                  </div>
                </div>
              </div>

              {/* Official Emails */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f1b38] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#c5a880] tracking-wider">
                    Correos Institucionales
                  </div>
                  <a
                    href="mailto:contacto@mendozalev.mx"
                    className="block text-sm font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    contacto@mendozalev.mx
                  </a>
                  <a
                    href="mailto:urgencias@mendozalev.mx"
                    className="block text-sm font-semibold text-slate-300 hover:text-red-400 transition-colors"
                  >
                    urgencias@mendozalev.mx
                  </a>
                </div>
              </div>

              {/* WhatsApp Direct CTA */}
              <div className="pt-2">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="secondary"
                    className="w-full py-5 bg-emerald-950/70 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 flex items-center justify-center gap-2 font-bold"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Iniciar Chat Cifrado en WhatsApp</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Physical Location Card */}
            <div className="glass-panel p-8 rounded-2xl border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f1b38] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#c5a880] tracking-wider">
                    Sede Corporativa
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {siteConfig.address.street}
                  </div>
                  <div className="text-xs text-slate-400">
                    {siteConfig.address.neighborhood}, C.P. {siteConfig.address.postalCode},{" "}
                    {siteConfig.address.city}.
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c5a880]" />
                <span>Previa cita confidencial confirmada en recepción.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">
                    Formulario de Consulta Confidencial
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Los datos ingresados se almacenan bajo cifrado local y estricto secreto profesional.
                  </p>
                </div>
                <ShieldCheck className="w-8 h-8 text-[#c5a880] shrink-0" />
              </div>

              {submittedFolio ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Consulta Recibida con Éxito</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Su solicitud ha sido radicada de forma confidencial en nuestra plataforma interna.
                    Un socio titular se pondrá en contacto con usted a la brevedad.
                  </p>
                  <div className="inline-block p-3 rounded-lg bg-black/60 border border-emerald-500/40 font-mono text-sm text-emerald-400">
                    Folio de Recepción: <span className="font-bold">{submittedFolio}</span>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmittedFolio(null)}
                      className="text-xs"
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Nombre Completo o Empresa <span className="text-red-400">*</span>
                      </label>
                      <Input
                        placeholder="Ej. Ing. Roberto Mendoza o Grupo Alfa"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Teléfono Móvil o Directo <span className="text-red-400">*</span>
                      </label>
                      <Input
                        placeholder="+52 55 1234 5678"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Correo Electrónico
                      </label>
                      <Input
                        placeholder="contacto@ejemplo.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Materia del Asunto
                      </label>
                      <select
                        className="flex h-11 w-full rounded-md border border-slate-800 bg-[#070d1e] px-3 py-2 text-sm text-slate-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] focus-visible:border-[#c5a880]"
                        value={formData.matterType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            matterType: e.target.value as any,
                          })
                        }
                      >
                        <option value="penal">Derecho Penal / Juicio Oral</option>
                        <option value="fiscal">Derecho Fiscal / Defensa SAT</option>
                        <option value="delito_fiscal">Delitos Fiscales / Art. 69-B CFF</option>
                        <option value="urgencia">Urgencia Inmediata (Detención/Embargo)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-slate-300">
                        Nivel de Premura
                      </label>
                      <span className="text-[11px] text-slate-500">
                        Determina la prioridad de respuesta
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgencyLevel: "media" })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                          formData.urgencyLevel === "media"
                            ? "bg-[#c5a880]/20 border-[#c5a880] text-[#f3e5ab]"
                            : "bg-[#070d1e] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        Normal (24 hrs)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgencyLevel: "alta" })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                          formData.urgencyLevel === "alta"
                            ? "bg-amber-950/60 border-amber-500 text-amber-300"
                            : "bg-[#070d1e] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        Alta (&lt; 4 hrs)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgencyLevel: "inmediata" })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                          formData.urgencyLevel === "inmediata"
                            ? "bg-red-950/80 border-red-500 text-red-300 font-bold"
                            : "bg-[#070d1e] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        Crítica (&lt; 15 min)
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Descripción Confidencial de la Situación Jurídica <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      placeholder="Describa brevemente los hechos, autoridad involucrada (ej. SAT, FGR, Juzgado de Distrito) y si existen plazos o citatorios con fecha límite..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Al enviar este formulario, usted autoriza el tratamiento de sus datos conforme a nuestro{" "}
                    <a
                      href="/aviso-de-privacidad"
                      className="text-[#c5a880] underline hover:text-[#d8bd97]"
                    >
                      Aviso de Privacidad Integral
                    </a>{" "}
                    conforme a la LFPDPPP y bajo el amparo del secreto profesional.
                  </p>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-6 font-bold text-sm shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Cifrando y Enviando..." : "Enviar Asunto para Análisis Inmediato"}</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
