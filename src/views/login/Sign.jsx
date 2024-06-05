import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Sign = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setFormError("Passwords do not match.");
      return;
    }

    const formData = {
      /* username, */ // Ensure username is included in formData
      email,
      password1: password,
      password2: passwordConfirmation,
    };

    try {
      const response = await axios.post(
        "http://203.241.228.51:8000/api/accounts/v1/registration/",
        formData
      );
      console.log("회원가입 성공:", response.data);

      // Navigate to the login page instead of logging the user in directly
      navigate(routes.login);
    } catch (e) {
      console.error("회원가입 실패:", e);
      if (e.response && e.response.data) {
        setFormError(
          e.response.data.error || "An error occurred during registration."
        );
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
              <TextField
                label="아이디"
                type="text"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                required
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                label="이메일"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호 확인"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                variant="outlined"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Sign Up
              </Button>
              {formError && (
                <Typography color="error" align="center">
                  {formError}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};
