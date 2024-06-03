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

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isAuthenticated, username } = useAuthStore();
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "#fff", boxShadow: 0, mb: 3 }}
      >
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
                display: { xs: "none", md: "flex" },
                color: "#000",
              }}
            >
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <DragHandle style={{ color: "#000" }} />
              </IconButton> */}
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                {views.map((view) => (
                  <Button
                    key={view.english}
                    onClick={() => handleCloseNavMenu(view.english)}
                    style={{ color: "#000" }}
                  >
                    {view.korean}
                  </Button>
                ))}
              </Menu>
            </Box>
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
                justifyContent: "center",
              }}
            >
              <LOGO sx={{ maxWidth: 200 }} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {views.map((view) => (
                <Button
                  key={view.english}
                  onClick={() => handleCloseNavMenu(view.english)}
                >
                  {view.korean}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box>{isAuthenticated ? username : "LOGIN"}</Box>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
