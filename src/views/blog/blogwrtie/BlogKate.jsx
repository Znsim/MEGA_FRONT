import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
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
