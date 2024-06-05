import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { routes } from "../../routes";

export const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(routes.mypage);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
        {loginError && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {loginError}
          </Typography>
        )}
      </Box>
      <Typography sx={{ mt: 2 }}>
        아이디가 없으신가요? <Link to={routes.sign}>가입하기</Link>
      </Typography>
    </Container>
  );
};
