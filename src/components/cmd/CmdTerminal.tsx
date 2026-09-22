"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  LayoutDashboard,
  Shield,
  FileText,
  Clock,
  Download,
  Trash2,
  Search,
  PlusCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useCmdStore, TerminalEntry } from "@/lib/store";
import { db, LegalCase, Lead, AuditLog, seedInitialData } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatDate, formatDateTime, generateCaseFolio } from "@/lib/utils";

export function CmdTerminal() {
  const {
    isOpen,
    setOpen,
    activeView,
    setActiveView,
    terminalLogs,
    addLog,
    clearTerminal,
    currentInput,
    setCurrentInput,
    navigateHistory,
    theme,
    setTheme,
  } = useCmdStore();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Dexie live queries (IndexedDB reactive)
  const allCases = useLiveQuery(() => db.cases.toArray(), []) || [];
  const allLeads = useLiveQuery(() => db.leads.orderBy("createdAt").reverse().toArray(), []) || [];
  const allLogs = useLiveQuery(() => db.auditLogs.orderBy("timestamp").reverse().toArray(), []) || [];

  // Seed on mount if needed
  useEffect(() => {
    seedInitialData();
  }, []);

  // Auto focus input and scroll to bottom on terminal view
  useEffect(() => {
    if (isOpen && activeView === "terminal") {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, activeView, terminalLogs]);

  if (!isOpen) return null;

  // Process CLI command
  const executeCommand = async (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Log the user command
    addLog({ type: "command", content: `mendoza-lev@admin:~$ ${trimmed}` });
    setCurrentInput("");

    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case "help":
        addLog({
          type: "system",
          content: `COMANDOS DISPONIBLES EN EL SISTEMA INTERNO MENDOZA & LEV:
  help                             - Muestra este manual de comandos.
  cases list                       - Lista todos los expedientes activos en IndexedDB.
  case new <penal|fiscal> <titular> - Registra un nuevo expediente rápido.
  case view <folio>                - Ver expediente detallado (ej. case view EXP-2026-FISC-8831).
  leads                            - Muestra los prospectos recibidos desde el formulario web.
  stats                            - Métricas y balance general de casos y contingencias.
  export                           - Exporta y descarga la base de datos completa en JSON.
  theme <gold|green|amber>         - Modifica la paleta de colores de la terminal.
  view <dashboard|terminal>        - Alterna entre terminal CLI y tablero visual CRM.
  clear                            - Limpia la pantalla de la terminal.
  exit                             - Cierra la consola administrativa.`,
        });
        break;

      case "cases":
      case "expedientes":
        if (args[0] === "list" || args.length === 0) {
          const cases = await db.cases.toArray();
          let output = `EXPEDIENTES REGISTRADOS EN INDEXEDDB (${cases.length}):\n`;
          output += "--------------------------------------------------------------------------------\n";
          output += "FOLIO               | MATERIA  | RIESGO   | ESTATUS       | CLIENTE\n";
          output += "--------------------------------------------------------------------------------\n";
          cases.forEach((c) => {
            const folio = c.caseNumber.padEnd(19, " ");
            const mat = c.matter.toUpperCase().padEnd(8, " ");
            const risk = c.riskLevel.toUpperCase().padEnd(8, " ");
            const st = c.status.toUpperCase().padEnd(13, " ");
            output += `${folio} | ${mat} | ${risk} | ${st} | ${c.clientName}\n`;
          });
          addLog({ type: "response", content: output });
        } else {
          addLog({
            type: "error",
            content: "Sintaxis no reconocida. Utilice 'cases list' o 'help'.",
          });
        }
        break;

      case "case":
        if (args[0] === "new" && args.length >= 3) {
          const matter = args[1].toLowerCase() as any;
          const client = args.slice(2).join(" ");
          const folio = generateCaseFolio(matter.includes("fisc") ? "FISC" : "PEN");
          const newId = await db.cases.add({
            caseNumber: folio,
            clientName: client,
            matter: matter.includes("fisc") ? "fiscal" : "penal",
            title: `Asunto legal registrado vía terminal CMD para ${client}`,
            stage: "Revisión Inicial de Estrategia",
            authority: "En determinación de jurisdicción competente",
            riskLevel: "alto",
            status: "activo",
            deadlineDate: new Date(Date.now() + 15 * 86400000).toISOString().split("T")[0],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            notes: ["Expediente aperturado manualmente desde consola CMD."],
          });

          await db.auditLogs.add({
            timestamp: new Date().toISOString(),
            action: "CASE_CREATED_CMD",
            command: trimmed,
            user: "ADMIN_CMD",
            details: `Expediente ${folio} creado exitosamente con ID ${newId}.`,
          });

          addLog({
            type: "success",
            content: `[OK] Expediente ${folio} registrado con éxito en IndexedDB (ID: ${newId}).`,
          });
        } else if (args[0] === "view" && args[1]) {
          const target = await db.cases.where("caseNumber").equals(args[1]).first();
          if (target) {
            let detail = `DETALLE DEL EXPEDIENTE ${target.caseNumber}:\n`;
            detail += `Cliente:       ${target.clientName}\n`;
            detail += `Materia:       ${target.matter.toUpperCase()}\n`;
            detail += `Autoridad:     ${target.authority}\n`;
            detail += `Etapa:         ${target.stage}\n`;
            detail += `Nivel Riesgo:  ${target.riskLevel.toUpperCase()}\n`;
            detail += `Fecha Límite:  ${target.deadlineDate}\n`;
            detail += `Notas (${target.notes.length}):\n`;
            target.notes.forEach((n, idx) => {
              detail += `  [${idx + 1}] ${n}\n`;
            });
            addLog({ type: "response", content: detail });
          } else {
            addLog({
              type: "error",
              content: `No se encontró ningún expediente con el folio '${args[1]}'.`,
            });
          }
        } else {
          addLog({
            type: "error",
            content: "Uso: case new <penal|fiscal> <nombre_cliente>  o  case view <folio>",
          });
        }
        break;

      case "leads":
      case "prospectos":
        const leads = await db.leads.toArray();
        let leadsOut = `PROSPECTOS RECIBIDOS EN PORTAL WEB (${leads.length}):\n`;
        leadsOut += "--------------------------------------------------------------------------------\n";
        leadsOut += "ID  | FECHA       | MATERIA  | URGENCIA   | NOMBRE / CONTACTO\n";
        leadsOut += "--------------------------------------------------------------------------------\n";
        leads.forEach((l) => {
          const id = String(l.id).padEnd(3, " ");
          const dt = l.createdAt.substring(0, 10);
          const mat = l.matterType.toUpperCase().padEnd(8, " ");
          const urg = l.urgencyLevel.toUpperCase().padEnd(10, " ");
          leadsOut += `${id} | ${dt}  | ${mat} | ${urg} | ${l.fullName} (${l.phone})\n`;
        });
        addLog({ type: "response", content: leadsOut });
        break;

      case "stats":
      case "stat":
        const totalCases = await db.cases.count();
        const totalLeads = await db.leads.count();
        const urgentCases = await db.cases.where("riskLevel").equals("critico").count();
        const activeCases = await db.cases.where("status").equals("activo").count();

        let statsOut = `ESTADÍSTICAS DEL DESPACHO MENDOZA & LEV:\n`;
        statsOut += `  • Total de Expedientes en Base de Datos: ${totalCases}\n`;
        statsOut += `  • Casos en Litigio Activo:              ${activeCases}\n`;
        statsOut += `  • Asuntos con Nivel de Riesgo Crítico:  ${urgentCases}\n`;
        statsOut += `  • Prospectos Recibidos Web:             ${totalLeads}\n`;
        statsOut += `  • Estado de Almacenamiento:             IndexedDB Activo & Cifrado en Navegador\n`;
        addLog({ type: "response", content: statsOut });
        break;

      case "export":
        const allData = {
          exportDate: new Date().toISOString(),
          firm: "Mendoza & LEV Abogados",
          cases: await db.cases.toArray(),
          leads: await db.leads.toArray(),
          auditLogs: await db.auditLogs.toArray(),
        };

        const blob = new Blob([JSON.stringify(allData, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `mendoza_lev_backup_${new Date().toISOString().split("T")[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);

        addLog({
          type: "success",
          content: "[OK] Base de datos exportada y descargada exitosamente en formato JSON.",
        });
        break;

      case "theme":
        if (["gold", "green", "amber"].includes(args[0])) {
          setTheme(args[0] as any);
          addLog({
            type: "success",
            content: `Tema visual modificado a '${args[0]}'.`,
          });
        } else {
          addLog({
            type: "error",
            content: "Temas disponibles: gold, green, amber. Ejemplo: theme green",
          });
        }
        break;

      case "view":
        if (args[0] === "dashboard") {
          setActiveView("dashboard");
        } else if (args[0] === "terminal") {
          setActiveView("terminal");
        } else {
          addLog({ type: "error", content: "Opciones de vista: dashboard | terminal" });
        }
        break;

      case "clear":
      case "cls":
        clearTerminal();
        break;

      case "exit":
      case "quit":
        setOpen(false);
        break;

      default:
        addLog({
          type: "error",
          content: `Comando no reconocido: '${command}'. Escriba 'help' para consultar los comandos disponibles.`,
        });
        break;
    }
  };

  const getThemeColors = () => {
    switch (theme) {
      case "green":
        return {
          text: "text-emerald-400",
          border: "border-emerald-500/40",
          prompt: "text-emerald-500",
          highlight: "text-emerald-300",
        };
      case "amber":
        return {
          text: "text-amber-400",
          border: "border-amber-500/40",
          prompt: "text-amber-500",
          highlight: "text-amber-300",
        };
      default:
        return {
          text: "text-[#f3e5ab]",
          border: "border-[#c5a880]/40",
          prompt: "text-[#c5a880]",
          highlight: "text-white",
        };
    }
  };

  const themeColors = getThemeColors();

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 transition-all duration-200 animate-in fade-in`}
    >
      <div
        className={`bg-[#050914] border ${themeColors.border} rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-300 ${
          isFullscreen ? "w-full h-full rounded-none" : "w-full max-w-5xl h-[85vh]"
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#0b1224] border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setOpen(false)}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-600 transition-colors"
                title="Cerrar consola"
              />
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-600 transition-colors"
                title="Maximizar / Restaurar"
              />
              <button
                onClick={() => setActiveView(activeView === "terminal" ? "dashboard" : "terminal")}
                className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-600 transition-colors"
                title="Alternar modo de vista"
              />
            </div>
            <div className="flex items-center gap-2 pl-2 text-xs font-mono text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="font-bold text-white">MENDOZA & LEV</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">CMD Admin Console [IndexedDB]</span>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2">
            <div className="bg-black/60 p-1 rounded-lg border border-slate-800 flex items-center gap-1">
              <button
                onClick={() => setActiveView("terminal")}
                className={`px-3 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "terminal"
                    ? "bg-[#162544] text-[#c5a880] font-bold border border-[#c5a880]/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <TerminalIcon className="w-3 h-3" />
                <span>CLI Terminal</span>
              </button>
              <button
                onClick={() => setActiveView("dashboard")}
                className={`px-3 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "dashboard"
                    ? "bg-[#162544] text-[#c5a880] font-bold border border-[#c5a880]/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutDashboard className="w-3 h-3" />
                <span>Tablero CRM</span>
              </button>
            </div>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800/60"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800/60"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View 1: Interactive Terminal CLI */}
        {activeView === "terminal" && (
          <div
            className="flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-y-auto bg-[#040813] space-y-2 select-text"
            onClick={() => inputRef.current?.focus()}
          >
            {terminalLogs.map((log) => {
              let colorClass = themeColors.text;
              if (log.type === "command") colorClass = "text-white font-bold";
              if (log.type === "error") colorClass = "text-red-400 font-semibold";
              if (log.type === "success") colorClass = "text-emerald-400 font-semibold";
              if (log.type === "system") colorClass = "text-slate-400";

              return (
                <div key={log.id} className="leading-relaxed whitespace-pre-wrap">
                  <span className="text-[10px] text-slate-600 mr-2 select-none">
                    [{log.timestamp}]
                  </span>
                  <span className={colorClass}>{log.content}</span>
                </div>
              );
            })}

            {/* Terminal Active Prompt Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(currentInput);
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className={`select-none font-bold ${themeColors.prompt}`}>
                mendoza-lev@admin:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    navigateHistory("up");
                  } else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    navigateHistory("down");
                  }
                }}
                className={`flex-1 bg-transparent border-none outline-none font-mono text-white ${themeColors.text}`}
                autoFocus
                spellCheck={false}
              />
            </form>
            <div ref={bottomRef} />
          </div>
        )}

        {/* View 2: Executive CRM Dashboard */}
        {activeView === "dashboard" && (
          <div className="flex-1 p-6 overflow-y-auto bg-[#070d1e] space-y-6">
            {/* Top Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-xl border-slate-800">
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Expedientes Activos
                </div>
                <div className="text-2xl font-bold text-white font-serif mt-1">
                  {allCases.length}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Persistencia IndexedDB</span>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border-slate-800">
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Prospectos Web Recibidos
                </div>
                <div className="text-2xl font-bold text-[#c5a880] font-serif mt-1">
                  {allLeads.length}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Desde formulario de contacto
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border-slate-800">
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Urgencias Críticas
                </div>
                <div className="text-2xl font-bold text-red-400 font-serif mt-1">
                  {allCases.filter((c) => c.riskLevel === "critico").length}
                </div>
                <div className="text-[11px] text-red-400/80 mt-1">
                  Audiencias y plazos perentorios
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border-slate-800 flex flex-col justify-between">
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Acciones Rápidas
                </div>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => executeCommand("export")}
                    className="text-xs py-1 h-8 flex-1"
                  >
                    <Download className="w-3 h-3 mr-1" /> Backup
                  </Button>
                  <Button
                    variant="terminal"
                    size="sm"
                    onClick={() => setActiveView("terminal")}
                    className="text-xs py-1 h-8 flex-1"
                  >
                    <TerminalIcon className="w-3 h-3 mr-1" /> CLI
                  </Button>
                </div>
              </div>
            </div>

            {/* Cases and Leads Tabs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#c5a880]" />
                  <span>Expedientes en Litigio Activo</span>
                </h3>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      placeholder="Buscar expediente o cliente..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-8 pl-8 text-xs w-60 bg-black/40"
                    />
                  </div>
                </div>
              </div>

              {/* Cases Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#040813]">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-[#091124] text-slate-400 uppercase tracking-wider font-semibold">
                      <th className="p-3">Folio</th>
                      <th className="p-3">Cliente</th>
                      <th className="p-3">Materia</th>
                      <th className="p-3">Autoridad / Juzgado</th>
                      <th className="p-3">Riesgo</th>
                      <th className="p-3">Plazo Fatal</th>
                      <th className="p-3">Estatus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {allCases
                      .filter(
                        (c) =>
                          c.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.caseNumber.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((c) => (
                        <tr key={c.id} className="hover:bg-slate-900/60 transition-colors">
                          <td className="p-3 font-mono text-[#c5a880] font-bold">
                            {c.caseNumber}
                          </td>
                          <td className="p-3 font-semibold text-white">{c.clientName}</td>
                          <td className="p-3">
                            <span className="uppercase font-semibold text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {c.matter}
                            </span>
                          </td>
                          <td className="p-3 text-slate-300 max-w-[200px] truncate">
                            {c.authority}
                          </td>
                          <td className="p-3">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                c.riskLevel === "critico"
                                  ? "bg-red-950 text-red-300 border border-red-800/60"
                                  : "bg-amber-950 text-amber-300 border border-amber-800/60"
                              }`}
                            >
                              {c.riskLevel.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-3 font-mono text-slate-300">{c.deadlineDate}</td>
                          <td className="p-3">
                            <Badge
                              variant={
                                c.status === "resuelto_favorable"
                                  ? "success"
                                  : c.status === "activo"
                                  ? "gold"
                                  : "secondary"
                              }
                              className="text-[10px]"
                            >
                              {c.status.replace("_", " ").toUpperCase()}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Leads Table from Website Contacts */}
              <div className="pt-6">
                <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <span>Prospectos Recibidos del Formulario Web (IndexedDB)</span>
                </h3>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#040813]">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 bg-[#091124] text-slate-400 uppercase tracking-wider font-semibold">
                        <th className="p-3">ID</th>
                        <th className="p-3">Fecha y Hora</th>
                        <th className="p-3">Nombre</th>
                        <th className="p-3">Teléfono / Email</th>
                        <th className="p-3">Materia</th>
                        <th className="p-3">Urgencia</th>
                        <th className="p-3">Asunto</th>
                        <th className="p-3">Estatus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {allLeads.map((l) => (
                        <tr key={l.id} className="hover:bg-slate-900/60 transition-colors">
                          <td className="p-3 font-mono text-slate-400">#{l.id}</td>
                          <td className="p-3 font-mono text-slate-400">
                            {formatDateTime(l.createdAt)}
                          </td>
                          <td className="p-3 font-bold text-white">{l.fullName}</td>
                          <td className="p-3 text-slate-300">
                            <div>{l.phone}</div>
                            <div className="text-[11px] text-slate-500">{l.email}</div>
                          </td>
                          <td className="p-3 uppercase font-semibold text-[10px]">
                            {l.matterType}
                          </td>
                          <td className="p-3">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                l.urgencyLevel === "inmediata"
                                  ? "bg-red-950 text-red-300 border border-red-800/60"
                                  : "bg-slate-800 text-slate-300"
                              }`}
                            >
                              {l.urgencyLevel.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-3 text-slate-300 max-w-[250px] truncate">
                            {l.description}
                          </td>
                          <td className="p-3">
                            <select
                              value={l.status}
                              onChange={async (e) => {
                                if (l.id) {
                                  await db.leads.update(l.id, {
                                    status: e.target.value as any,
                                  });
                                }
                              }}
                              className="bg-black/60 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200"
                            >
                              <option value="nuevo">Nuevo</option>
                              <option value="contactado">Contactado</option>
                              <option value="en_analisis">En Análisis</option>
                              <option value="descartado">Descartado</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terminal Footer Bar */}
        <div className="bg-[#0b1224] border-t border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              IndexedDB OK
            </span>
            <span>|</span>
            <span>{allCases.length} Asuntos</span>
            <span>|</span>
            <span>{allLeads.length} Leads</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Presione &apos;help&apos; para ver comandos</span>
            <span>|</span>
            <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-300">ESC / exit</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
