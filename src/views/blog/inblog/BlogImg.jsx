import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const BlogImg = () => {
  return (
    <ImageList sx={{ width: 600, height: 600 }} cols={1} rowHeight={600}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=600&h=600&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=600&h=600&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oOSctyFZnodOUjDoH54VkKnySi7dsFJUPg&s',
    title: 'Breakfast',
  },
];

export default BlogImg;
