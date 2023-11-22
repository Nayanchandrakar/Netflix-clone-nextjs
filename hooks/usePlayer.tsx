"use client";
import { create } from "zustand";

interface usePlayerInterface {
  IsOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  getVideoId: string | number;
  setVideoId: (video: string | number) => void;
}

export const usePlayer = create<usePlayerInterface>((set) => ({
  IsOpen: false,
  getVideoId: "",
  onOpen: () => set({ IsOpen: true }),
  onClose: () => set({ IsOpen: false }),
  setVideoId: (video) => set({ getVideoId: video }),
}));
