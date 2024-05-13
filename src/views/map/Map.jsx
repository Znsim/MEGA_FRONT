import { Suspense, useEffect } from "react";
import { useState /* useRef */ /* useEffect  */ } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { useMapStore } from "../../store/useMapStore";

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
  const { setSelectedMarker } = useMapStore();
  const jeju = new navermaps.LatLng(33.3590628, 126.534361);
  const busan = new navermaps.LatLng(35.1797865, 129.0750194);
  // const dokdo = new navermaps.LatLngBounds(
  //   new navermaps.LatLng(37.2380651, 131.8562652),
  //   new navermaps.LatLng(37.2444436, 131.8786475)
  // );
  const seoul = new navermaps.LatLngBounds(
    new navermaps.LatLng(37.42829747263545, 126.76620435615891),
    new navermaps.LatLng(37.7010174173061, 127.18379493229875)
  );

  const center = new navermaps.LatLng(35.15174040704873, 128.83838653564453);

  const [map, setMap] = useState(null);
  const markUp = (marker) => {
    setSelectedMarker(marker);
  };

  const dummyMarkers = [
    {
      id: 1,
      lat: 35.15174040704873,
      lng: 128.8383865356445,
      name: "인제병원",
      category: "동물병원",
      address: "경남 김해시 어쩌고",
    },
    {
      id: 2,
      lat: 35.15274260704873,
      lng: 128.8383865775644,
      name: "인제병원2",
      category: "동물병원",
      address: "경남 김해시 어쩌고2",
    },
  ];

  const [loading, setLoading] = useState(true);
  // const { userLocation, setUserLocation, loading, setLoading } =
  //   useStore(useMapStore);

  // useEffect(() => {
  //   // 사용자의 현재 위치 가져오기
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       setUserLocation({ lat: latitude, lng: longitude });
  //       setLoading(false);
  //     });
  //   }
  // }, []);

  useEffect(() => {
    // 비동기 작업 수행
    const fetchData = async () => {
      // 작업 완료 후 로딩 상태 변경
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Suspense fallback={null}>loading</Suspense>
      ) : (
        <MapDiv
          style={{
            width: "100%",
            height: "600px",
          }}
        >
          <NaverMap defaultCenter={center} defaultZoom={15} ref={setMap}>
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
                제주도
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
                대한민국
              </button>
              {/* <button
              style={buttonStyle}
              onClick={(e) => {
                e.preventDefault();
                if (map) {
                  map.fitBounds(dokdo);
                }
              }}
            >
              독도로 fitBounds
            </button> */}
              <button
                style={buttonStyle}
                onClick={(e) => {
                  e.preventDefault();
                  if (map) {
                    map.panTo(busan);
                  }
                }}
              >
                부산
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
                서울
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
                오른쪽으로 조금씩 이동하기
              </button>
            </div>
            {dummyMarkers.map((marker) => {
              return (
                <Marker
                  key={marker.id}
                  defaultPosition={new navermaps.LatLng(marker.lat, marker.lng)}
                  onClick={() => markUp(marker)}
                />
              );
            })}
          </NaverMap>
        </MapDiv>
      )}
    </>
  );
};
