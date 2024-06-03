import React from "react";
import "./RadioButtons.css"; // 라디오 버튼의 스타일을 정의하는 CSS 파일 불러오기
import { Radio } from "@mui/material";

export const RadioButtons = ({ selectedValueProp, handleChangeProp }) => {
  // 선택된 값과 변경 핸들러를 받아옴
  const handleChange = (event) => {
    handleChangeProp(event.target.value); // 부모 컴포넌트에서 상태 업데이트가 이루어지도록 handleChangeProp 호출
  };

  return (
    <div className="radio-buttons">
      <Radio
        checked={selectedValueProp === "latest"}
        onChange={handleChange}
        value="latest"
        name="radio-buttons"
        inputProps={{ "aria-label": "최신순" }}
      />
      <span className="radio-label">최신순</span>

      <Radio
        checked={selectedValueProp === "popular"}
        onChange={handleChange}
        value="popular"
        name="radio-buttons"
        inputProps={{ "aria-label": "인기순" }}
      />
      <span className="radio-label">인기순</span>
    </div>
  );
};
