// RadioButtons.jsx
import React from "react";
import "./RadioButtons.css"; // 라디오 버튼의 스타일을 정의하는 CSS 파일 불러오기
import { Radio } from "@mui/material";

export const RadioButtons = ({ selectedValueProp, handleChangeProp }) => {
  // selectedValue와 handleChange를 구분하기 위해 이름을 변경
  const [selectedValue, setSelectedValue] = React.useState(selectedValueProp); // selectedValue 변수명 변경

  const handleChange = (event) => {
    // handleChange 함수명 변경
    setSelectedValue(event.target.value);
    handleChangeProp(event.target.value); // handleChangeProp을 호출하여 부모 컴포넌트에서도 상태 업데이트가 이루어지도록 함
  };

  return (
    <div className="radio-buttons">
      <span className="radio-label">최신순</span>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <span className="radio-label">인기순</span>
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
      />
    </div>
  );
};
