import React, { useState } from "react";
import "./CustomBreadcrumbs.css"; // 커스텀 스타일을 정의하는 CSS 파일 불러오기
import { Stack, Button } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const CustomBreadcrumbs = () => {
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setSelectedLink(link);
  };

  return (
    <div className="breadcrumbs-container">
      <div role="presentation" onClick={handleClick}>
        <Stack
          aria-label="breadcrumb"
          direction="row" // 방향을 가로로 설정
          spacing={2} // 버튼 간격 설정
        >
          <Button
            underline="hover"
            color="inherit"
            href="/"
            onClick={(e) => handleLinkClick(e, "멍멍이")}
          >
            멍멍이
          </Button>
          <Button
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={(e) => handleLinkClick(e, "아옹이")}
          >
            아옹이
          </Button>
          <Button
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={(e) => handleLinkClick(e, "기타")}
          >
            기타
          </Button>
        </Stack>
      </div>
      {/* CatContent를 고정된 위치에 렌더링 */}
    </div>
  );
};
