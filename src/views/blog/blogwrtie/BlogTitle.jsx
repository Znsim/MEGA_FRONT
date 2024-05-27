import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  const [image, setImage] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  const [title, setTitle] = React.useState("블로그 제목");
  const [content, setContent] = React.useState("블로그 내용");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        maxWidth: '100%',
        overflow: 'hidden',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="제목"
          value={title}
          onChange={handleTitleChange}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <textarea
          required
          id="filled-required"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={handleContentChange}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '16px',
            padding: '10px',
            resize: 'none',
            overflow: 'hidden',
            minHeight: '100px',
          }}
        />
      </div>
      <div>
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="contained-button-file">
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
            사진 업로드
          </Button>
        </label>
      </div>
      <div>
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
        </div>
      )}
      
      </div>
    </Box>
  );
}
