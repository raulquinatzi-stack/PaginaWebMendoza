"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CmdTerminal } from "@/components/cmd/CmdTerminal";
import { useCmdStore } from "@/lib/store";

export default function CmdPage() {
  const { setOpen } = useCmdStore();

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <div className="min-h-screen bg-[#03060e] text-slate-200 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#091122] border border-[#c5a880]/40 text-[#c5a880] mx-auto flex items-center justify-center shadow-xl">
          <Terminal className="w-8 h-8 text-emerald-400" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
            <Lock className="w-3 h-3" />
            <span>Consola de Administración y Litigio Activa</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white font-serif">
            Sistema CMD Mendoza & LEV
          </h1>
          <p className="text-sm text-slate-400">
            Base de datos local respaldada en IndexedDB con soporte fuera de línea, expedientes de litigio y control de prospectos web.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="terminal"
            size="lg"
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto font-mono text-sm"
          >
            <Terminal className="w-4 h-4 mr-2" />
            Abrir Terminal CLI / CRM
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm border-slate-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Página Principal
            </Button>
          </Link>
        </div>
      </div>

      <CmdTerminal />
    </div>
  );
}
