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

const normalBtnStyle = {
  backgroundColor: "#fff",
  border: "solid 1px #333",
  outline: "0 none",
  borderRadius: "5px",
  boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.5)",
  margin: "0 5px 5px 0",
};

const selectedBtnStyle = {
  ...normalBtnStyle,
  backgroundColor: "#2780E3",
  color: "white",
};

function MapComponent({ selectedCategory, selectedMarkerId, markUp, markers }) {
  const navermaps = useNavermaps();
  const [map, setMap] = useState(null);
  const [scaleControl, setScaleControl] = useState(true);

  const center = new navermaps.LatLng(35.2481236, 128.9027787);
  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <button
        style={scaleControl ? selectedBtnStyle : normalBtnStyle}
        onClick={() => {
          setScaleControl((prev) => !prev);
        }}
      >
        모든 지도 컨트롤
      </button>
      <NaverMap
        defaultCenter={center}
        defaultZoom={15}
        ref={setMap}
        scaleControl={scaleControl}
        logoControl={scaleControl}
        mapDataControl={scaleControl}
        mapTypeControl={scaleControl}
        zoomControl={scaleControl}
      >
        {markers
          .filter((marker) => marker.category === selectedCategory)
          .map((marker) => {
            const isSelected = marker.id === selectedMarkerId;
            const markerIcon = isSelected
              ? selectedMarkerIcon(navermaps)
              : unSelectedMarkerIcon(navermaps, marker.category);
            return (
              <Marker
                key={marker.id}
                defaultPosition={
                  new navermaps.LatLng(marker.latitude, marker.longitude)
                }
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
