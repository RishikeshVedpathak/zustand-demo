import create from "zustand";
import { devtools } from "zustand/middleware";

type BearState = {
  bears: number;
  increasePopulation: (by?: number | null) => void;
  removeAllBears: () => void;
  asyncAddBears: () => void;
};

export const useStore = create<BearState>(
  devtools(
    (set) => ({
      bears: 0,
      increasePopulation: (count) =>
        set((state) => ({ bears: state.bears + (count || 1) })),
      removeAllBears: () => set({ bears: 0 }),
      asyncAddBears: async () => {
        const result = await fetch("https://reqres.in/api/users?delay=5")
          .then((res) => res.json())
          .then((res) => res);
        set({ bears: result.per_page });
      },
    }),
    "MyStore"
  )
);
