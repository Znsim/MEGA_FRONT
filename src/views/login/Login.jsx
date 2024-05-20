// pages/Login.jsx
import { useAuthStore } from "../../store/useAuthStore";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 리디렉트를 위해 필요
import { routes } from "../../routes";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(); // 로그인 상태를 true로 설정
    navigate(routes.mypage); // 마이페이지로 리디렉트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { username, password });
    handleLogin(); // 실제 로그인 처리 로직을 handleLogin 함수 내에서 처리
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
