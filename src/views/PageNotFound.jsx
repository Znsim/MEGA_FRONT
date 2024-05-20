import { Box, Typography, useMediaQuery } from "@mui/material";

const imgData = [
  {
    id: 1,
    img: "https://unsplash-assets.imgix.net/empty-states/photos.png?auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/a9/ea/b3/a9eab37a1298a845a37db0ad00021088.gif",
  },
];

export const PageNotFound = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          mt: 1,
        }}
      >
        <img
          src={`${imgData[1].img}`}
          alt="Page Not Found"
          style={{
            width: isMobile ? "60%" : "80%",
            borderRadius: "10vh",
            overflow: "hidden",
          }}
        />

        <Typography sx={{ fontFamily: "KCC-Ganpan", fontSize: "50px" }}>
          404
        </Typography>
      </Box>
    </>
  );
};
