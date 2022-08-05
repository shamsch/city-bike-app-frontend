import create from "zustand";

interface MaxValueStore {
	maxDistance: number[];
	setMaxDistance: (maxDistance: number[]) => void;
	maxDuration: number[];
	setMaxDuration: (maxDuration: number[]) => void;
}

export const maxValueStore = create<MaxValueStore>((set) => ({
	maxDistance: [0, 5000],
	setMaxDistance: (maxDistance) => set((state) => ({ ...state, maxDistance })),
	maxDuration: [0, 3000],
	setMaxDuration: (maxDuration) => set((state) => ({ ...state, maxDuration })),
}));
