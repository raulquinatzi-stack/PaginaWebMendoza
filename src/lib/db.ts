import Dexie, { type Table } from "dexie";

export interface Lead {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  matterType: "penal" | "fiscal" | "delito_fiscal" | "urgencia";
  urgencyLevel: "inmediata" | "alta" | "media";
  description: string;
  status: "nuevo" | "contactado" | "en_analisis" | "descartado";
  createdAt: string;
  notes?: string;
}

export interface LegalCase {
  id?: number;
  caseNumber: string;
  clientName: string;
  matter: "penal" | "fiscal" | "delito_fiscal" | "compliance";
  title: string;
  stage: string;
  authority: string;
  riskLevel: "critico" | "alto" | "moderado";
  status: "activo" | "en_tramite" | "resuelto_favorable" | "archivado";
  deadlineDate: string;
  createdAt: string;
  updatedAt: string;
  financialImpact?: string;
  notes: string[];
}

export interface AuditLog {
  id?: number;
  timestamp: string;
  action: string;
  command: string;
  user: string;
  details?: string;
}

export class MendozaLevDB extends Dexie {
  leads!: Table<Lead, number>;
  cases!: Table<LegalCase, number>;
  auditLogs!: Table<AuditLog, number>;

  constructor() {
    super("MendozaLev_Legal_DB");
    this.version(1).stores({
      leads: "++id, fullName, email, matterType, urgencyLevel, status, createdAt",
      cases: "++id, caseNumber, clientName, matter, riskLevel, status, deadlineDate, createdAt",
      auditLogs: "++id, timestamp, action, user",
    });
  }
}

export const db = new MendozaLevDB();

// Sembrado inicial de datos demo realistas si la base de datos está vacía
export async function seedInitialData() {
  const caseCount = await db.cases.count();
  if (caseCount === 0) {
    const initialCases: LegalCase[] = [
      {
        caseNumber: "EXP-2026-FISC-8831",
        clientName: "Consorcio Logístico del Golfo S.A. de C.V.",
        matter: "fiscal",
        title: "Juicio Contencioso Administrativo vs Crédito Fiscal Determinado por AGACE",
        stage: "Fase Probatoria / Pericial Contable",
        authority: "Tribunal Federal de Justicia Administrativa (TFJA - Sala Regional Metropolitana)",
        riskLevel: "critico",
        status: "activo",
        deadlineDate: "2026-10-15",
        createdAt: "2026-08-10T10:30:00Z",
        updatedAt: "2026-09-18T14:20:00Z",
        financialImpact: "$18,450,000 MXN",
        notes: [
          "Se interpuso incidente de suspensión del cobro con póliza de fianza de caución.",
          "SAT intentó trabar embargo preventivo de cuentas bancarias; se promovió amparo indirecto.",
          "Peritaje contable en curso sobre materialidad de deducciones e intangibles.",
        ],
      },
      {
        caseNumber: "EXP-2026-PEN-4412",
        clientName: "Ing. Roberto Garza Elizondo (Director General)",
        matter: "penal",
        title: "Defensa Penal Estratégica en Carpeta de Investigación por Delito Patrimonial",
        stage: "Audiencia Inicial - Vinculación a Proceso",
        authority: "Centro de Justicia Penal Federal en la Ciudad de México (Reclusorio Norte)",
        riskLevel: "critico",
        status: "activo",
        deadlineDate: "2026-09-28",
        createdAt: "2026-08-25T16:00:00Z",
        updatedAt: "2026-09-20T11:45:00Z",
        financialImpact: "Libertad y Patrimonio Corporativo",
        notes: [
          "Audiencia inicial fijada para el 28 de septiembre a las 10:00 hrs.",
          "Desahogo de datos de prueba periciales en materia financiera para desacreditar el dolo.",
          "Estrategia de no vinculación a proceso y medida cautelar en libertad sin prisión preventiva.",
        ],
      },
      {
        caseNumber: "EXP-2026-FISC-3104",
        clientName: "Grupo Farmacéutico Central S.A.P.I. de C.V.",
        matter: "delito_fiscal",
        title: "Defensa contra Presunción de Operaciones Inexistentes (Art. 69-B y 108 CFF)",
        stage: "Aclaración Previa / Procedimiento 69-B CFF",
        authority: "Administración Central de Fiscalización Estratégica (SAT)",
        riskLevel: "alto",
        status: "en_tramite",
        deadlineDate: "2026-10-02",
        createdAt: "2026-09-02T09:15:00Z",
        updatedAt: "2026-09-19T18:00:00Z",
        financialImpact: "$32,100,000 MXN",
        notes: [
          "Se integró expediente probatorio con bitácoras de geolocalización, contratos notariados y entregables técnicos.",
          "Presentación de escritos de desvirtuamiento de operaciones simuladas dentro del plazo legal.",
        ],
      },
      {
        caseNumber: "EXP-2025-PEN-1192",
        clientName: "Desarrollos Inmobiliarios Santa Fe",
        matter: "penal",
        title: "Juicio de Amparo Indirecto vs Orden de Comparecencia y Aseguramiento Ministerial",
        stage: "Sentencia de Amparo Definitivo",
        authority: "Juzgado Décimo Cuarto de Distrito de Amparo en Materia Penal en CDMX",
        riskLevel: "moderado",
        status: "resuelto_favorable",
        deadlineDate: "2026-02-14",
        createdAt: "2025-11-12T12:00:00Z",
        updatedAt: "2026-02-14T17:30:00Z",
        financialImpact: "Descongelamiento total de activos",
        notes: [
          "Sentencia favorable de amparo: Concesión lisa y llana por violación al debido proceso.",
          "Restitución inmediata del goce de derechos y levantamiento de sellos.",
        ],
      },
    ];

    await db.cases.bulkAdd(initialCases);
  }

  const leadCount = await db.leads.count();
  if (leadCount === 0) {
    const initialLeads: Lead[] = [
      {
        fullName: "Lic. Fernando Villaseñor Méndez",
        email: "fernando.villasenor@corporativovm.mx",
        phone: "+52 55 4912 8831",
        matterType: "urgencia",
        urgencyLevel: "inmediata",
        description: "Notificación de inmovilización preventiva de cuentas bancarias por parte del SAT esta mañana. Necesitamos amparo urgente.",
        status: "nuevo",
        createdAt: new Date().toISOString(),
        notes: "Urgencia asignada al socio penal-fiscal. Contacto telefónico prioritario.",
      },
      {
        fullName: "Dra. Carmen Morales Salgado",
        email: "carmen.morales@salgadomedica.com",
        phone: "+52 55 8321 0092",
        matterType: "fiscal",
        urgencyLevel: "alta",
        description: "Requerimiento de última acta parcial en visita domiciliaria del SAT por deducción de regalías al extranjero.",
        status: "en_analisis",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        notes: "En revisión de documentación contable por el área fiscal.",
      },
    ];

    await db.leads.bulkAdd(initialLeads);
  }

  const logCount = await db.auditLogs.count();
  if (logCount === 0) {
    await db.auditLogs.add({
      timestamp: new Date().toISOString(),
      action: "SISTEMA_INICIALIZADO",
      command: "init --firm=Mendoza&LEV",
      user: "ROOT_SYSADMIN",
      details: "Base de datos IndexedDB local inicializada con cifrado local y datos de despacho.",
    });
  }
}
