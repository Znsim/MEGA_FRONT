import { Container, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Container component="footer" maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="body1"
          color="#a4a4a4d6"
          align="center"
          style={{ fontFamily: "Pretendard" }}
        >
          {"Made with /* ❤️ */ by "}
          <Link color="inherit" href="https://github.com/Znsim/MEGA_FRONT/">
            OUR_PUPPYS
          </Link>
        </Typography>
      </Container>
    </>
  );
};
