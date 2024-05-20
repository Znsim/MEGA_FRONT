import { useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import {
  selectedMarkerIcon,
  unSelectedMarkerIcon,
} from "../../util/markerIcon";

const dummyMarkers = [
  {
    id: 1,
    lat: 35.244111236,
    lon: 128.902998,
    name: "인제병원",
    category: "100",
    address: "경남 김해시 어쩌고",
  },
  {
    id: 2,
    lat: 35.24212364,
    lon: 128.902773,
    name: "인제병원2",
    category: "100",
    address: "경남 김해시 어쩌고2",
  },
  {
    id: 3,
    lat: 35.248112364,
    lon: 128.90808,
    name: "인제동물1",
    category: "200",
    address: "경남 김해시 어쩌고3",
  },
  {
    id: 4,
    lat: 35.2468944,
    lon: 128.9045292,
    name: "인제동물2",
    category: "200",
    address: "경남 김해시 어쩌고4",
  },
];

function MapComponent({ selectedCategory, selectedMarkerId, markUp }) {
  const navermaps = useNavermaps();
  const [map, setMap] = useState(null);

  const center = new navermaps.LatLng(35.2481236, 128.9027787);
  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <NaverMap defaultCenter={center} defaultZoom={15} ref={setMap}>
        {dummyMarkers
          .filter((marker) => marker.category === selectedCategory)
          .map((marker) => {
            const isSelected = marker.id === selectedMarkerId;
            const markerIcon = isSelected
              ? selectedMarkerIcon(navermaps)
              : unSelectedMarkerIcon(navermaps, marker.category);
            return (
              <Marker
                key={marker.id}
                defaultPosition={new navermaps.LatLng(marker.lat, marker.lon)}
                onClick={() => markUp(marker)}
                icon={markerIcon}
              />
            );
          })}
      </NaverMap>
    </MapDiv>
  );
}

export default MapComponent;
