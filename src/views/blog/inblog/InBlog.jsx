import React from 'react';
import BlogImg from './BlogImg';
import BlogText from './BlogText';
import BlogTitle from './BlogTitle';
import BlogIcon from './BlogIcon';

function InBlog() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <BlogTitle />
        <BlogImg />
        <BlogText />
        <BlogIcon/>
      </div>
    </div>
  );
}

export default InBlog;
