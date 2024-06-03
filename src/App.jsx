import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./views/home/Home";
import { Map } from "./views/map/Map";
import { Login } from "./views/login/Login";
import { Sign } from "./views/login/Sign";
import { Container, CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./views/PageNotFound";
import { Logout } from "./views/login/Logout";
import { useAuthStore } from "./store/useAuthStore";
import { BlogMain } from "./views/blog/BlogMain";
<<<<<<< HEAD
import { MyPage } from "./views/mypage/MyPage";
import BlogWrite from "./views/blog/blogwrtie/BlogWrite";
import InBlog from "./views/blog/inblog/InBlog";
=======
import  MyPage from "./views/mypage/Mypage";
import  BlogWrite  from "./views/blog/blogwrtie/BlogWrite";
>>>>>>> f9ffadeb829618c3196a652f06e9dba1585a5ffd

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        maxWidth="lg"
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.map} element={<Map />} />
            <Route path={routes.blog} element={<BlogMain />} />
            <Route path={routes.blogwrite} element={<BlogWrite />} />
            <Route path={routes.blogdetail} element={<InBlog />} />
            <Route path={routes.mypage} element={<MyPage />} />
            <Route
              path={routes.login}
              element={isAuthenticated ? <MyPage /> : <Login />}
            />
            <Route path={routes.sign} element={<Sign />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
