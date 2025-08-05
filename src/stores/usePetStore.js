import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePetStore = create(
  persist(
    (set) => ({
      activePet: null,
      setActivePet: (pet) => set({ activePet: pet }),
    }),
    { name: "woofy-active-pet" } // se guarda en localStorage
  )
);
