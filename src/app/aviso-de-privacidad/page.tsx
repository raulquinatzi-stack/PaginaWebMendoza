import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Aviso de Privacidad Integral conforme a la LFPDPPP | Mendoza & LEV",
  description:
    "Aviso de Privacidad Integral de Mendoza & LEV conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y Secreto Profesional.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
