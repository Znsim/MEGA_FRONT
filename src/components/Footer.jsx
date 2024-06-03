import {
  Container,
  Typography,
  Link,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  MapRounded,
  BluetoothSearchingOutlined,
  AccountCircleRounded,
} from "@mui/icons-material";
import { routes } from "../routes";
import { useAuthStore } from "../store/useAuthStore";

export const Footer = () => {
  const navigate = useNavigate();
  const { isAuthenticated, username } = useAuthStore();

  const handleNavigationChange = (event, newValue) => {
    if (newValue === "user") {
      if (isAuthenticated) {
        navigate(routes.mypage);
      } else {
        navigate(routes.login);
      }
    } else {
      navigate(newValue);
    }
  };

  return (
    <>
      <Container
        component="footer"
        maxWidth="md"
        sx={{
          py: 4,
        }}
      >
        <Typography
          variant="body1"
          color="#a4a4a4d6"
          align="center"
          style={{ fontFamily: "Pretendard" }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {"Made with /* ❤️ */ by "}
          <Link color="inherit" href="https://github.com/Znsim/MEGA_FRONT/">
            OUR_PUPPYS
          </Link>
        </Typography>
      </Container>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation showLabels onChange={handleNavigationChange}>
          <BottomNavigationAction
            label="개냥이 지도"
            value={routes.map}
            icon={<MapRounded />}
          />
          <BottomNavigationAction
            label="블로그"
            value={routes.blog}
            icon={<BluetoothSearchingOutlined />}
          />
          <BottomNavigationAction
            label={isAuthenticated ? username : "LOGIN"}
            value="user"
            icon={<AccountCircleRounded />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};
