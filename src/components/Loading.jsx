import { CircularProgress, Container } from "@mui/material";

export const Loading = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    </>
  );
};
