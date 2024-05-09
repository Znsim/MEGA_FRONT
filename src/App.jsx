import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./views/home/Home";
import { Map } from "./views/map/Map";
import { BlogMain } from "./views/blog/BlogMain";
import { MyPage } from "./views/mypage/Mypage";
import { Login } from "./views/login/Login";
import { Sign } from "./views/login/Sign";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./views/PageNotFound";

function App() {
  return (
    <>
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        maxWidth="lg"
      >
        <BrowserRouter basename="/24_04_03_vite_project_practice">
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
        </BrowserRouter>
        <Footer />
      </Container>
    </>
  );
}

export default App;
