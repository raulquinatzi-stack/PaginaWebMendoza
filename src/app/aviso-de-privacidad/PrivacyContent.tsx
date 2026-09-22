"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ArrowLeft, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/seo";

export function PrivacyContent() {
  return (
    <div className="min-h-screen bg-[#060a16] text-slate-300 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
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

        {/* Header Document */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border-slate-800 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="gold" className="uppercase tracking-widest text-xs">
              Cumplimiento Legal LFPDPPP • México
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif mb-4">
            Aviso de Privacidad Integral
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            En estricto cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, su Reglamento y los Lineamientos del Aviso de Privacidad publicados en el Diario Oficial de la Federación, <strong>Mendoza & LEV Firma Legal S.C.</strong> emite el presente instrumento.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap gap-4">
            <span>Última actualización: Septiembre de 2026</span>
            <span>•</span>
            <span>Oficial de Privacidad: privacidad@mendozalev.mx</span>
          </div>
        </div>

        {/* Document Body */}
        <div className="space-y-10 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-3">
            <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#c5a880]" />
              <span>1. Identidad y Domicilio del Responsable</span>
            </h2>
            <p>
              <strong>Mendoza & LEV Firma Legal S.C.</strong> (en lo sucesivo denominada &ldquo;Mendoza & LEV&rdquo; o el &ldquo;Responsable&rdquo;), con domicilio corporativo en {siteConfig.address.street}, Colonia {siteConfig.address.neighborhood}, C.P. {siteConfig.address.postalCode}, Ciudad de México, México, es la entidad responsable del tratamiento, custodia, uso y protección de sus datos personales y sensibles recabados a través de nuestro portal web, consultas presenciales, medios telefónicos o mensajería electrónica.
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-3">
            <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#c5a880]" />
              <span>2. Datos Personales Recabados y Tratamiento de Datos Sensibles</span>
            </h2>
            <p>
              Para la adecuada prestación de nuestros servicios de asesoría jurídica, litigio penal y defensa fiscal, Mendoza & LEV podrá recabar las siguientes categorías de información:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
              <li>
                <strong>Datos de Identificación y Contacto:</strong> Nombre completo, número telefónico fijo o móvil, correo electrónico institucional o particular, domicilio particular o fiscal, Registro Federal de Contribuyentes (RFC) y Clave Única de Registro de Población (CURP).
              </li>
              <li>
                <strong>Datos Patrimoniales y Financieros:</strong> Información contable, estados de cuenta bancarios, determinaciones de créditos fiscales, declaraciones provisionales y anuales, actas constitutivas, contratos mercantiles y balances corporativos.
              </li>
              <li>
                <strong>Datos Personales Sensibles (Materia Penal):</strong> En virtud de la naturaleza de la defensa penal técnica, se podrán recabar datos relativos a carpetas de investigación, causas penales, audiencias de juicio oral, autos de vinculación a proceso, medidas cautelares, antecedentes y resoluciones judiciales. Estos datos son tratados bajo medidas de seguridad física, técnica y administrativa reforzadas y con estricta observancia del secreto profesional.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-3">
            <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
              <span>3. Finalidades del Tratamiento de los Datos</span>
            </h2>
            <p className="font-semibold text-white">Finalidades Primarias (Obligatorias):</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>El análisis de viabilidad, diseño de la teoría del caso y formulación de estrategias de defensa en materia penal y fiscal.</li>
              <li>La tramitación de juicios de amparo indirecto o directo ante Juzgados de Distrito, Tribunales Colegiados de Circuito y la Suprema Corte de Justicia de la Nación.</li>
              <li>La representación legal ante el Tribunal Federal de Justicia Administrativa (TFJA), el Servicio de Administración Tributaria (SAT), el Ministerio Público y Centros de Justicia Penal Federal.</li>
              <li>La comunicación urgente durante situaciones de detención activa, cateos, aseguramientos o auditorías en curso.</li>
              <li>El cumplimiento de obligaciones fiscales y contractuales derivadas de la prestación de servicios profesionales.</li>
            </ul>

            <p className="font-semibold text-white pt-2">Finalidades Secundarias:</p>
            <p>
              Envío de boletines jurídicos y análisis de reformas legislativas en materia penal y tributaria. Si el Titular no desea que sus datos personales sean tratados para estas finalidades accesorias, podrá manifestarlo en cualquier momento enviando un correo a <span className="text-[#c5a880]">privacidad@mendozalev.mx</span>.
            </p>
          </section>

          {/* Section 4 */}
          <section className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-3">
            <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#c5a880]" />
              <span>4. Secreto Profesional y Confidencialidad Rigurosa</span>
            </h2>
            <p>
              En Mendoza & LEV, la confidencialidad de la información no constituye únicamente una obligación contractual, sino un <strong>deber ético y jurídico fundamental</strong> tutelado por el <strong>Código Penal Federal (Artículos 210 y 211)</strong>, el Código de Comercio y los Códigos de Ética de la Abogacía Mexicana.
            </p>
            <p>
              Ningún abogado, consultor, perito o personal administrativo de esta firma revelará los secretos, comunicaciones o documentos confiados por el cliente, gozando de inviolabilidad en sus comunicaciones conforme al debido proceso legal.
            </p>
          </section>

          {/* Section 5 */}
          <section id="arco" className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-4">
            <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
              <span>5. Medios y Procedimiento para el Ejercicio de Derechos ARCO</span>
            </h2>
            <p>
              Usted, como Titular de los datos personales, o su representante legal debidamente acreditado, tiene el derecho de ejercer en todo momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong>, así como revocar el consentimiento otorgado para el tratamiento de los mismos.
            </p>

            <div className="p-4 rounded-lg bg-[#070b16] border border-slate-800 space-y-2">
              <div className="text-xs uppercase font-bold text-[#c5a880]">
                Mecanismo de Solicitud ARCO:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deberá remitir su solicitud vía correo electrónico a: <strong>privacidad@mendozalev.mx</strong>, adjuntando:
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-400 space-y-1 pl-2">
                <li>Nombre del titular y documento oficial con fotografía que acredite su identidad (INE, Pasaporte) o testimonio notarial de representación.</li>
                <li>Descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos ARCO.</li>
                <li>Cualquier otro elemento o documento que facilite la localización de los datos personales (ej. número de folio de expediente asignado).</li>
              </ol>
            </div>

            <p className="text-xs text-slate-400">
              Mendoza & LEV dará respuesta a su solicitud en un plazo no mayor a 20 (veinte) días hábiles contados a partir de la fecha de recepción formal, prorrogable una sola vez por periodo igual conforme a la legislación aplicable.
            </p>
          </section>

          {/* Section 6 */}
          <section id="seguridad" className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-3">
            <h2 className="text-xl font-bold text-white font-serif">
              6. Transferencia de Datos Personales
            </h2>
            <p>
              Mendoza & LEV no comercializa, transfiere ni cede sus datos personales a terceros con fines publicitarios o lucrativos. Las transferencias de datos que llegasen a efectuarse se limitan estrictamente a:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Autoridades judiciales, ministeriales o administrativas competentes ante las cuales se litigue en su representación (ej. Juzgados de Amparo, FGR, TFJA, SAT).</li>
              <li>Peritos contables, balísticos, médicos o técnicos contratados bajo cláusulas estrictas de confidencialidad para coadyuvar en la defensa procesal.</li>
              <li>Supuestos previstos expresamente en el Artículo 37 de la LFPDPPP.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="glass-panel p-6 sm:p-8 rounded-xl border-slate-800/80 space-y-3">
            <h2 className="text-xl font-bold text-white font-serif">
              7. Autoridad Garante y Cambios al Presente Aviso
            </h2>
            <p>
              Si usted considera que su derecho a la protección de datos personales ha sido lesionado por alguna conducta de nuestros miembros o presume alguna violación a las disposiciones de la LFPDPPP, podrá interponer la queja correspondiente ante el <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>. Para mayor información, visite <a href="https://home.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-[#c5a880] underline">www.inai.org.mx</a>.
            </p>
            <p>
              Mendoza & LEV se reserva el derecho de modificar el presente Aviso de Privacidad para adecuarlo a novedades legislativas, jurisprudenciales o políticas internas. Cualquier modificación sustantiva será publicada visiblemente en este portal web.
            </p>
          </section>

          {/* Contact Box */}
          <div className="p-6 rounded-xl bg-[#091122] border border-[#c5a880]/30 text-center space-y-2">
            <h3 className="font-bold text-white font-serif text-base">
              Comité de Privacidad y Cumplimiento Legal
            </h3>
            <p className="text-xs text-slate-400">
              Para dudas o aclaraciones sobre el tratamiento de su información confidencial:
            </p>
            <div className="text-sm font-semibold text-[#c5a880]">
              privacidad@mendozalev.mx • Tel: {siteConfig.telephone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
