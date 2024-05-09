import { useState, useRef } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const buttonsStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: "5px",
};

const buttonStyle = {
  margin: "0 5px 5px 0",
  WebkitAppearance: "button",
  cursor: "pointer",
  color: "#555",
  padding: "2px 6px",
  background: "#fff",
  border: "solid 1px #333",
  cursor: "pointer",
  WebkitBorderRadius: "5px",
  outline: "0 none",
  borderRadius: "5px",
  boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.5)",
};

export const Map = () => {
  // instead of window.naver.maps
  const navermaps = useNavermaps();
  const jeju = new navermaps.LatLng(33.3590628, 126.534361);
  const busan = new navermaps.LatLng(35.1797865, 129.0750194);
  const dokdo = new navermaps.LatLngBounds(
    new navermaps.LatLng(37.2380651, 131.8562652),
    new navermaps.LatLng(37.2444436, 131.8786475)
  );
  const seoul = new navermaps.LatLngBounds(
    new navermaps.LatLng(37.42829747263545, 126.76620435615891),
    new navermaps.LatLng(37.7010174173061, 127.18379493229875)
  );

  const center = new navermaps.LatLng(35.15174040704873, 128.83838653564453);

  const [map, setMap] = useState(null);
  const markUp = () => {};

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <NaverMap defaultCenter={center} defaultZoom={15} ref={setMap}>
        {/* buttons */}
        <div style={buttonsStyle}>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.setCenter(jeju);
              }
            }}
          >
            제주도로 setCenter
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.setZoom(6, true);
              }
            }}
          >
            6레벨로 setZoom
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.fitBounds(dokdo);
              }
            }}
          >
            독도로 fitBounds
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.panTo(busan);
              }
            }}
          >
            부산으로 panTo
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.panToBounds(seoul);
              }
            }}
          >
            서울로 panToBounds
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.panBy(new naver.maps.Point(10, 10));
              }
            }}
          >
            panBy로 조금씩 이동하기
          </button>
        </div>
        <Marker
          defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
          onClick={markUp}
        />
        <Marker
          defaultPosition={new navermaps.LatLng(37.5674909, 126.7470201)}
          onClick={markUp}
        />
        <Marker
          defaultPosition={
            new navermaps.LatLng(35.15174040704873, 128.83838653564453)
          }
          onClick={markUp}
        />
      </NaverMap>
    </MapDiv>
  );
};
