import React from "react";
import { RecipeReviewCard } from "./RecipeReviewCard";
import { RadioButtons } from "./RadioButtons";
import { CustomBreadcrumbs } from "./CustomBreadcrumbs";
import { Box, Fab } from "@mui/material"; // Fab과 Box를 한 줄로 임포트
import AddIcon from "@mui/icons-material/Add"; // AddIcon을 올바르게 임포트
import { useNavigate } from "react-router-dom";

import "./BlogMain.css";
import { routes } from "../../routes";
//import { AltRoute } from "@mui/icons-material";

export const BlogMain = () => {

  const navigate = useNavigate();

  const blogwriteOpen = () => {
    navigate(routes.blogwrite);
  };
  

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div>
        <div>
          <RadioButtons />
        </div>
        <div className="App">
          <CustomBreadcrumbs />
        </div>
        <div className="App">
          <RecipeReviewCard />
        </div>
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            "& > :not(style)": { m: 1 },
          }}
        >
          <Fab color="primary" aria-label="add" onClick={blogwriteOpen}>
            <AddIcon />
          </Fab>
        </Box>
      </div>
    </>
  );
};


