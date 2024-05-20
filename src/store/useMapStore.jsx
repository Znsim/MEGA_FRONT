import { create } from "zustand";

export const useMapStore = create((set) => ({
  selectedMarker: null /* useState와 같이 변수 생성 */,
  setSelectedMarker: (marker) =>
    set({ selectedMarker: marker }) /* 2차작업 store에서 marker값을 넣어준다 */,
  userLocation: null,
  setUserLocation: (location) => set({ userLocation: location }),
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
}));
