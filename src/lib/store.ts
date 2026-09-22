import { create } from "zustand";

export interface TerminalEntry {
  id: string;
  type: "command" | "response" | "error" | "success" | "system";
  content: string;
  timestamp: string;
}

interface CmdState {
  isOpen: boolean;
  activeView: "terminal" | "dashboard" | "plazos";
  commandHistory: string[];
  historyIndex: number;
  terminalLogs: TerminalEntry[];
  currentInput: string;
  theme: "amber" | "green" | "gold";

  // Actions
  toggleOpen: () => void;
  setOpen: (open: boolean) => void;
  setActiveView: (view: "terminal" | "dashboard" | "plazos") => void;
  setCurrentInput: (input: string) => void;
  addLog: (entry: Omit<TerminalEntry, "id" | "timestamp">) => void;
  clearTerminal: () => void;
  navigateHistory: (direction: "up" | "down") => void;
  setTheme: (theme: "amber" | "green" | "gold") => void;
}

export const useCmdStore = create<CmdState>((set, get) => ({
  isOpen: false,
  activeView: "terminal",
  commandHistory: [],
  historyIndex: -1,
  theme: "gold",
  terminalLogs: [
    {
      id: "init-1",
      type: "system",
      content: "MENDOZA & LEV ABOGADOS - SISTEMA INTERNO DE GESTIÓN Y LITIGIO [v2.4.0]",
      timestamp: new Date().toLocaleTimeString("es-MX"),
    },
    {
      id: "init-2",
      type: "system",
      content: "Sesión autenticada. Base de datos local activa en IndexedDB. Escriba 'help' para comandos.",
      timestamp: new Date().toLocaleTimeString("es-MX"),
    },
  ],
  currentInput: "",

  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (open) => set({ isOpen: open }),
  setActiveView: (view) => set({ activeView: view }),
  setCurrentInput: (input) => set({ currentInput: input }),

  addLog: (entry) => {
    const newEntry: TerminalEntry = {
      ...entry,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString("es-MX"),
    };
    set((state) => ({
      terminalLogs: [...state.terminalLogs, newEntry],
      commandHistory:
        entry.type === "command"
          ? [...state.commandHistory, entry.content]
          : state.commandHistory,
      historyIndex: -1,
    }));
  },

  clearTerminal: () =>
    set({
      terminalLogs: [
        {
          id: "cleared",
          type: "system",
          content: "Terminal reiniciada. Base de datos y registros en memoria listos.",
          timestamp: new Date().toLocaleTimeString("es-MX"),
        },
      ],
    }),

  navigateHistory: (direction) => {
    const { commandHistory, historyIndex } = get();
    if (commandHistory.length === 0) return;

    if (direction === "up") {
      const nextIndex =
        historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      set({
        historyIndex: nextIndex,
        currentInput: commandHistory[nextIndex] || "",
      });
    } else {
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        set({ historyIndex: -1, currentInput: "" });
      } else {
        set({
          historyIndex: nextIndex,
          currentInput: commandHistory[nextIndex] || "",
        });
      }
    }
  },

  setTheme: (theme) => set({ theme }),
}));
