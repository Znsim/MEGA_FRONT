import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export const Sign = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const handleLogin = () => {
    login(); // 로그인 상태를 true로 설정
    navigate(routes.mypage); // 마이페이지로 리디렉트
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("가입 정보:", { username, password });
    handleLogin(); // 실제 로그인 처리 로직을 handleLogin 함수 내에서 처리
  };
  const validation = () => {
    let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
    return check.test(value);
  };

  return (
    <>
      <Container maxWidth="xs">
        <div style={{ marginTop: "50px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign
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
                  error={validation()}
                  helperText={
                    validation()
                      ? "특수기호나 한글은 입력 하실 수 없습니다."
                      : ""
                  }
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
                  Sign
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </>
  );
};
