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
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { routes } from "../../routes";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Sign = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
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
    } else {
      setFormError("");
    }

    const formData = {
      username,
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

      // Login the user by calling your login function
      login(username, password);

      // Navigate to the mypage route
      navigate(routes.mypage);
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
            <Grid item xs={12}>
              <TextField
                label="아이디"
                type="text"
                fullWidth
                value={username}
                onChange={setUsername}
                variant="outlined"
                required
              />
            </Grid>
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export const Sign = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [payload, setPayload] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("비밀번호가 일치하지 않습니다.");
//       return;
//     }

//     setPayload({
//       username: username, // username 값을 추가
//       email: email,
//       password1: password,
//       password2: confirmPassword,
//     });
//   };

//   useEffect(() => {
//     const postData = async () => {
//       if (!payload) return;

//       setLoading(true);
//       setMessage("");

//       try {
//         console.log("보내는 데이터:", payload); // 로그 추가
//         const response = await axios.post(
//           "http://203.241.228.51:8000/api/accounts/v1/registration/",
//           payload,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//           }
//         );
//         if (response.status === 201) {
//           setMessage("회원가입 성공");
//           setUsername("");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//         } else {
//           setMessage("회원가입 실패");
//         }
//       } catch (error) {
//         console.error(
//           "회원가입 오류:",
//           error.response ? error.response.data : error.message
//         ); // 오류 로그 추가
//         setMessage(
//           `회원가입 실패: ${
//             error.response ? error.response.data : error.message
//           }`
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     postData();
//   }, [payload]);

//   return (
//     <div>
//       <h2>회원가입</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>사용자 이름:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>이메일:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>비밀번호:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>비밀번호 확인:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "회원가입 중..." : "회원가입"}
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };
