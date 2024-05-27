import React from 'react';
import BlogKate from './BlogKate';
import BlogTitle from './BlogTitle';
import { BlogUp } from './BlogUp';
function BlogWrite() {
  //const { index } = useParams();
  //const blog = blogData[index];

  
  return (
    <div>
      <h1>블로그 작성</h1>
      <div>
        <p><b>[카테고리]</b></p>
        <BlogKate/>
      </div>
      <div>
        <p><b>[글 작성]</b></p>
        <BlogTitle/>
      </div>
      <div>
        <p><BlogUp/></p>
      </div>
    </div>
  );
}

export default BlogWrite;
