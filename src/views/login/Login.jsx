import { useAuthStore } from "../../store/useAuthStore";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const { login } = useAuthStore();
  const handleLogin = () => {
    // 실제 로그인 처리 로직
    login();
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직을 작성합니다.
    console.log("로그인 시도:", { username, password });
    // 나머지 로그인 처리 코드를 작성하세요.
  };
  return (
    <>
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
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};
