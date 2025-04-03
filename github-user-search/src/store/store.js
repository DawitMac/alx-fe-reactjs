import { create } from "zustand";

import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools( 
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: "user-storage", // unique name
        getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
      }
    )
    )
);