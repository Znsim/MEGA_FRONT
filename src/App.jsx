import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./views/home/Home";
import { Map } from "./views/map/Map";
import { BlogMain } from "./views/blog/BlogMain";
import { MyPage } from "./views/mypage/Mypage";
import { Login } from "./views/login/Login";
import { Sign } from "./views/login/Sign";
import { Container, CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./views/PageNotFound";
import theme from "./Muistyle";

function App() {
  return (
    <>
      <CssBaseline theme={theme} />
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        maxWidth="lg"
      >
        <BrowserRouter basename="/MEGA_FRONT">
          <Header />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.map} element={<Map />} />
            <Route path={routes.blog} element={<BlogMain />} />
            <Route path={routes.mypage} element={<MyPage />} />
            <Route path={routes.login} element={<Login />} />
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
