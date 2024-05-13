import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './CustomBreadcrumbs.css'; // 커스텀 스타일을 정의하는 CSS 파일 불러오기


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs() {
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setSelectedLink(link);
  };

  return (
    <div className="breadcrumbs-container">
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={(e) => handleLinkClick(e, '멍멍이')}
          >
            멍멍이
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={(e) => handleLinkClick(e, '아옹이')}
          >
            아옹이
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={(e) => handleLinkClick(e, '기타')}
          >
            기타
          </Link>
        </Breadcrumbs>
      </div>
      {/* CatContent를 고정된 위치에 렌더링 */}
      
    </div>
  );
}
