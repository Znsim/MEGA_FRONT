import { Button, ButtonGroup } from "@mui/material";
import { Suspense, useEffect, useState } from "react";

import { Loading } from "../../components/Loading";
import { useMapStore } from "../../store/useMapStore";

import MapComponent from "./MapComponent";
import { MapDetail } from "./MapDetail";

export const Map = () => {
  const { setSelectedMarker } = useMapStore();

  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("100");

  const markUp = (marker) => {
    setSelectedMarker(marker);
    setSelectedMarkerId(marker.id);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Suspense>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            sx={{ mb: 3 }}
          >
            <Button onClick={() => handleCategoryChange("100")}>
              동물병원
            </Button>
            <Button onClick={() => handleCategoryChange("200")}>
              동물가게
            </Button>
          </ButtonGroup>
          <MapComponent
            selectedCategory={selectedCategory}
            selectedMarkerId={selectedMarkerId}
            markUp={markUp}
          />
          <MapDetail />
        </>
      )}
    </Suspense>
  );
};
