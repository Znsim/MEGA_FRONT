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
  const [loginError, setLoginError] = useState(false);

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
    login(username, password); // 사용자 이름과 비밀번호를 함께 전달
    navigate(routes.mypage); // 마이페이지로 리디렉트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사를 수행하여 에러가 있을 경우 에러 메시지를 설정
    if (!/^[A-Za-z0-9 ]+$/.test(username)) {
      setUsernameError(true);
      setLoginError(true); // 로그인 에러 설정
      return; // 유효성 검사 실패 시 함수 종료
    }

    // dummyuser 배열에서 사용자 찾기
    const user = dummyuser.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setUsernameError(false);
      setLoginError(false); // 로그인 에러 초기화
      console.log("Login successful:", { username, password });
      handleLogin(); // 로그인 성공 시 handleLogin 함수 호출
    } else {
      setLoginError(true); // 로그인 에러 설정
      console.log("Login failed: Invalid credentials");
    }
  };

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
                value={username}
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
        </Box>
        {loginError && (
          <Typography color="error" variant="body2" sx={{ mt: 3 }}>
            로그인 실패: 사용자 이름 또는 비밀번호가 잘못되었습니다.
          </Typography>
        )}
        <p>
          아이디가 없으신가요? <Link to={routes.sign}>가입하기</Link>
        </p>
      </div>
    </Container>
  );
};
