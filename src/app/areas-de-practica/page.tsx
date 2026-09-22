import type { Metadata } from "next";
import { AreasContent } from "./AreasContent";

export const metadata: Metadata = {
  title: "Áreas de Práctica Especializada | Derecho Penal y Fiscal | Mendoza & LEV",
  description:
    "Detalle de las áreas de práctica jurídica de Mendoza & LEV: Derecho Penal de Alto Impacto, Amparos Urgentes, Litigio Fiscal ante el SAT y TFJA, y Delitos Económicos.",
};

export default function PracticeAreasPage() {
  return <AreasContent />;
}
