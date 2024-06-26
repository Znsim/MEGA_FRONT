export const unSelectedMarkerIcon = (navermaps, type) => {
  const icons = {
    100: {
      url: "../../animalHospitalMarker.png",
      size: new navermaps.Size(40, 40),
      scaledSize: new navermaps.Size(40, 40),
      anchor: new navermaps.Point(20, 20),
    },
    200: {
      url: "../../petStoreMarker.png",
      size: new navermaps.Size(40, 40),
      scaledSize: new navermaps.Size(40, 40),
      anchor: new navermaps.Point(20, 20),
    },
  };
  return icons[type];
};

export const selectedMarkerIcon = (navermaps) => ({
  url: "../../markerIcon.png",
  size: new navermaps.Size(50, 50),
  scaledSize: new navermaps.Size(50, 50),
  anchor: new navermaps.Point(25, 25),
});
