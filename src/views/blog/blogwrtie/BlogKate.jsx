import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  const [selectedButton, setSelectedButton] = React.useState(null);

  React.useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 로컬 저장소에서 값을 가져옴
    const storedValue = localStorage.getItem('selectedButton');
    if (storedValue) {
      setSelectedButton(storedValue);
    }
  }, []);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    // 로컬 저장소에 선택된 버튼의 값을 저장
    localStorage.setItem('selectedButton', value);
  };

  return (
    <ButtonGroup>
      <Button
        style={{ border: 'none', color: selectedButton === '멍멍이' ? 'red' : 'black' }}
        onClick={() => handleButtonClick('멍멍이')}
      >
        멍멍이
      </Button>
      <Button
        style={{ border: 'none', color: selectedButton === '야옹이' ? 'red' : 'black' }}
        onClick={() => handleButtonClick('야옹이')}
      >
        야옹이
      </Button>
      <Button
        style={{ border: 'none', color: selectedButton === '기타' ? 'red' : 'black' }}
        onClick={() => handleButtonClick('기타')}
      >
        기타
      </Button>
    </ButtonGroup>
  );
}
