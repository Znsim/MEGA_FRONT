import { useMapStore } from "../../store/useMapStore";
import { Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const MapDetail = () => {
  const { selectedMarker, setSelectedMarker } = useMapStore();

  if (!selectedMarker) return null;

  const handleClose = () => {
    setSelectedMarker(null);
  };

  return (
    <Paper
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderTop: "1px solid #ccc",
        width: "100%", // 화면 너비 전체 사용
        boxSizing: "border-box", // 패딩과 테두리 포함 너비 유지
      }}
    >
      <div>
        <Typography variant="h6">{selectedMarker.place_name}</Typography>
        <Typography variant="body2">{selectedMarker.address}</Typography>
      </div>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};
