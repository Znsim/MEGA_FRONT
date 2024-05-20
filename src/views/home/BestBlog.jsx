// components/BestBlog.jsx
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const blogPosts = [
  {
    id: 1,
    imageUrl: "https://source.unsplash.com/random/200x200?sig=1",
    postUrl: "/blog/1",
    name: "내 강아지 이뿌지",
  },
  {
    id: 2,
    imageUrl: "https://source.unsplash.com/random/200x200?sig=2",
    postUrl: "/blog/2",
    name: "내 고양이 이뿌지",
  },
  {
    id: 3,
    imageUrl: "https://source.unsplash.com/random/200x200?sig=3",
    postUrl: "/blog/3",
    name: "내 강아지 귀엽지",
  },
];

export const BestBlog = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 4 }}>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={4} key={post.id}>
          <Card>
            <CardActionArea href={post.postUrl}>
              <CardMedia
                component="img"
                height="500"
                image={post.imageUrl}
                alt={`블로그 포스트 ${post.id}`}
              />
            </CardActionArea>
            <CardContent>{post.name}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
