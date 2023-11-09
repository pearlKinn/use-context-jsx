import { create } from "zustand";

export const theme = create((set) => ({
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
}));
