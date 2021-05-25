import create from "zustand";

type BearState = {
  bears: number;
  increasePopulation: (by?: number | null) => void;
  removeAllBears: () => void;
};

export const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: (count) =>
    set((state) => ({ bears: state.bears + (count || 1) })),
  removeAllBears: () => set({ bears: 0 }),
}));
