// pages/Login.jsx
import { useAuthStore } from "../../store/useAuthStore";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 리디렉트를 위해 필요
import { routes } from "../../routes";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const dummyuser = [
    {
      id: 0,
      username: "test1",
      password: "test123",
    },
    {
      id: 1,
      username: "test2",
      password: "test1234",
    },
    {
      id: 2,
      username: "test3",
      password: "test12345",
    },
  ];

  const handleLogin = () => {
    login(); // 로그인 상태를 true로 설정
    navigate(routes.mypage); // 마이페이지로 리디렉트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[A-Za-z ]+$/.test(username)) {
      setUsernameError(false);
      console.log("Login attempt:", { username, password });
      handleLogin(); // Actual login logic is handled inside handleLogin function
    } else {
      setUsernameError(true);
    }
  };

  // const validation = () => {
  //   let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
  //   return check.test(value);
  // };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                fullWidth
                value={dummyuser.username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                required
                error={usernameError}
                helperText={
                  usernameError.toString()
                    ? "특수기호나 한글은 입력 하실 수 없습니다."
                    : ""
                }
                inputProps={{
                  pattern: "[A-Za-z ]+", //문자와 공백만 허용
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={dummyuser.password}
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
        </Box>
        <p>
          아이디가 없으신가요? <Link to={routes.sign}>가입하기</Link>
        </p>
      </div>
    </Container>
  );
};
