import type { Metadata } from "next";

export const siteConfig = {
  name: "Mendoza & LEV | Abogados Penalistas y Defensa Fiscal",
  shortName: "Mendoza & LEV",
  description:
    "Firma legal de élite en México especializada en Derecho Penal de Alto Impacto, Juicio Oral, Amparos Urgentes, Litigio Fiscal Estratégico ante el SAT, TFJA y Delitos Económicos. Asistencia y defensa de urgencia 24/7.",
  url: "https://mendozalev.mx",
  ogImage: "https://mendozalev.mx/og-image.jpg",
  telephone: "+52 55 8432 9900",
  emergencyPhone: "+52 55 9123 4567",
  whatsappNumber: "525591234567",
  address: {
    street: "Av. Paseo de las Palmas 405, Piso 18",
    neighborhood: "Lomas de Chapultepec",
    city: "Ciudad de México",
    postalCode: "11000",
    country: "MX",
  },
  geo: {
    latitude: "19.42847",
    longitude: "-99.20875",
  },
  keywords: [
    "abogados penalistas cdmx",
    "defensa fiscal sat mexico",
    "despacho penal fiscal",
    "amparo penal urgente",
    "juicio contencioso administrativo tfja",
    "delitos fiscales art 108 cff",
    "cancelacion creditos fiscales",
    "desbloqueo cuentas bancarias sat",
    "abogado tributario mexico",
    "defensa penal corporativa",
    "operaciones inexistentes 69-b",
    "urgencias penales 24 horas cdmx",
  ],
};

export const defaultMetadata: Metadata = {
  title: {
    default: "Mendoza & LEV | Abogados Especialistas en Derecho Penal y Fiscal",
    template: "%s | Mendoza & LEV Abogados",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Mendoza & LEV Firma Legal" }],
  creator: "Mendoza & LEV",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    title: "Mendoza & LEV | Litigio Penal Estratégico y Defensa Fiscal de Alto Nivel",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendoza & LEV | Abogados Penal y Fiscal",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateLegalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://mendozalev.mx/#firm",
    name: "Mendoza & LEV Abogados",
    alternateName: "Mendoza & LEV Firma Legal",
    url: "https://mendozalev.mx",
    logo: "https://mendozalev.mx/logo.png",
    image: "https://mendozalev.mx/og-image.jpg",
    description: siteConfig.description,
    telephone: siteConfig.telephone,
    email: "contacto@mendozalev.mx",
    priceRange: "$$$$",
    currenciesAccepted: "MXN, USD",
    paymentAccepted: "Transferencia bancaria, Tarjeta de crédito corporativa, Cheque",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.neighborhood,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "Línea de Guardia para Urgencias Penales y Fiscales 24/7",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Jurídicos Especializados",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Defensa Penal de Alto Impacto y Juicio Oral Acusatorio",
            description: "Representación técnica en audiencias iniciales, intermedias y juicio oral; amparo penal urgente.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Litigio Fiscal Estratégico y Defensa Tributaria",
            description: "Juicio contencioso administrativo federal (TFJA), nulidad de créditos fiscales y atención a auditorías del SAT.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Defensa en Delitos Fiscales y Compliance Penal",
            description: "Defensa en carpetas de investigación por defraudación fiscal (Art. 108 CFF) y operaciones simuladas (Art. 69-B CFF).",
          },
        },
      ],
    },
  };
}
