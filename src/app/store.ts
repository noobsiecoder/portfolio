import { create } from "zustand";

type NavInfoState = {
  showNavInfo: boolean;
  setShowNavInfo: (value: boolean) => void;
};

export const useNavInfoStore = create<NavInfoState>((set) => ({
  showNavInfo: false,
  setShowNavInfo: (value) => set({ showNavInfo: value }),
}));
