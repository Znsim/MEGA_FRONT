import React from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

export function BlogUp() {
  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   navigate('/blog');
  // };

  return (
    <Button
      variant="contained"
      component="span"
      style={{
        boxShadow: 'none',
        border: '2px solid black',
        color: 'black',
        backgroundColor: 'white',
      }}
      // onClick={handleButtonClick}
    >
      블로그 업로드
    </Button>
  );
}
