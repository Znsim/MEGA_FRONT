import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const BlogText = () => {
  return (
    <div>
      <div style={{textAlign:'right',marginTop: '16px'}}>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      </div>
    </div>
  );
}

export default BlogText;
