import React from 'react';
import { Button } from '@mui/material';
export function BlogUp(){
    return(
        <Button
        variant="contained"
        component="span"
        style={{
          boxShadow: 'none',
          border: '2px solid black',
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        블로그 업로드
      </Button>
    )
}