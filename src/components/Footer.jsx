import { useMapStore } from "../store/useMapStore";

export const Footer = () => {
  const { selectedMarker } = useMapStore();

  return (
    <>
      {selectedMarker && (
        <div>
          {selectedMarker.name} + {selectedMarker.address}
        </div>
      )}
    </>
  );
};
