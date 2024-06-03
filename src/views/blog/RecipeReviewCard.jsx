import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CardActionArea,
} from "@mui/material";
import { RadioButtons } from "./RadioButtons"; // RadioButtons 컴포넌트를 불러옴
import FavoriteIcon from "@mui/icons-material/Favorite";

const RecipeReviewCard = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("latest"); // 기본 정렬 값을 최신순으로 설정
  const [liked, setLiked] = useState({}); // 좋아요 상태와 수를 객체로 추적

  const fetchBlogData = async () => {
    try {
      const response = await fetch('http://203.241.228.51:8000/post/content/');
      const data = await response.json();
      // 좋아요 수를 0으로 초기화
      const initialLiked = {};
      data.forEach(blog => {
        initialLiked[blog.content_id] = 0;
      });
      setLiked(initialLiked);
      setBlogData(data); // 가져온 데이터를 상태에 설정
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  // 정렬 함수
  const sortedData = [...blogData]; // 먼저 blogData를 복제하여 사용합니다.
sortedData.sort((a, b) => {
  if (selectedSort === "latest") {
    return new Date(b.created_date) - new Date(a.created_date);
  } else if (selectedSort === "popular") {
    return liked[b.content_id] - liked[a.content_id];
  }
  return 0;
});


  const handleLikeClick = (blogId) => {
    setLiked(prevLiked => ({
      ...prevLiked,
      [blogId]: prevLiked[blogId] + 1
    }));
  };

  return (
    <div>
      <RadioButtons
        selectedValueProp={selectedSort}
        handleChangeProp={setSelectedSort}
      />
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {sortedData.map((blog, index) => (
          <Card key={index} sx={{ maxWidth: 345, width: "100%" }}>
            <CardActionArea href={`/blog/${blog.id}`}>
              <CardHeader title={blog.title} subheader={blog.content_title} />
              <CardMedia
                component="img"
                height="350"
                width="1000"
                image={blog.image}
                onClick ={() => {window.location.href=`/blog/$created_date`}}
              />
              <CardContent href={`/blog/${blog.id}`}>
                <CardHeader title={blog.title} />
                <Typography variant="body2" color="text.secondary">
                  {blog.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleLikeClick(blog.content_id)}
                  style={{ color: liked[blog.content_id] > 0 ? "red" : "inherit" }}
                >
                  <FavoriteIcon/>
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginLeft: "auto" }}
                >
                  {blog.animal}
                </Typography>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeReviewCard;
