import { create } from "zustand";

export const useMapStore = create((set) => ({
  selectedMarker: null,
  setSelectedMarker: (marker) => set({ selectedMarker: marker }),
  userLocation: null,
  setUserLocation: (location) => set({ userLocation: location }),
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
}));
