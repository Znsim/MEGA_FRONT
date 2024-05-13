import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Button,
} from "@mui/material";
import { useState } from "react";
import { LOGO } from "./LOGO";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { DragHandle } from "@mui/icons-material";
import { routes } from "../routes";

const views = [
  { korean: "개냥이 지도", english: "map" },
  { korean: "블로그", english: "blog" },
];
const settings = ["마이페이지", "로그아웃"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isAuthenticated } = useAuthStore();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleOpenUserMenu = () => {
    if (isAuthenticated) {
      navigate(routes.mypage); // 마이페이지로 이동
    } else {
      navigate(routes.login); // 로그인 페이지로 이동
    }
  };

  const handleCloseNavMenu = (slug) => {
    navigate(slug);
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href={routes.home}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <LOGO sx={{ maxWidth: 200 }} />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "#000",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <DragHandle style={{ color: "#000" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                // onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {views.map((views) => (
                  <Button
                    key={views.english}
                    onClick={() => handleCloseNavMenu(views.english)}
                    style={{ color: "#000" }}
                  >
                    {views.korean}
                  </Button>
                ))}
              </Menu>
            </Box>
            {/* <Button
              sx={{
                display: { xs: "none", md: "block" },
                mr: 1,
                color: "#000",
              }}
              component="a"
              href={routes.map}
            >
              개냥이 지도
            </Button>
            <Button
              sx={{
                display: { xs: "none", md: "block", color: "#000" },
                mr: 1,
              }}
              component="a"
              href={routes.blog}
            >
              블로그
            </Button> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href={routes.home}
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <LOGO sx={{ maxWidth: 200 }} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {views.map((views) => (
                <Button
                  key={views.english}
                  onClick={() => handleCloseNavMenu(views.english)}
                >
                  {views.korean}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box>LOGIN</Box>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                // onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} /* onClick={handleCloseUserMenu} */>
                    <Typography variant="h1" textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
