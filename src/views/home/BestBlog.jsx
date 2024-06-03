// components/BestBlog.jsx
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// const blogPosts = [
//   {
//     id: 1,
//     imageUrl: "https://source.unsplash.com/random/200x200?sig=1",
//     postUrl: "/blog/1",
//     name: "내 강아지 이뿌지",
//   },
//   {
//     id: 2,
//     imageUrl: "https://source.unsplash.com/random/200x200?sig=2",
//     postUrl: "/blog/2",
//     name: "내 고양이 이뿌지",
//   },
//   {
//     id: 3,
//     imageUrl: "https://source.unsplash.com/random/200x200?sig=3",
//     postUrl: "/blog/3",
//     name: "내 강아지 귀엽지",
//   },
// ];

const blogData = [
  {
    id: 1,
    title: "블로그 제목 1",
    date: "게시한 날짜",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKJc11v9RaVGfazH2t7QMygX2Kon0DKCb2Q&usqp=CAU",
    content: "블로그 내용 1",
    animal: "강아지",
    postUrl: "/blog/1",
    username: "작성자1",
  },
  {
    id: 2,
    title: "블로그 제목 2",
    date: "게시한 날짜",
    imageUrl:
      //"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXGBcXFhcXFxcXFhcXGBUXFxcXFxYYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFS0dFR0rLSsrLSstLS0tKy0rKy0tLS0rLS0tLSsrKys3KystKystKy0rLSstLSstLSstLSs3K//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAYFBwj/xAA4EAABAwIEAwYFAwMEAwAAAAABAAIRAyEEEjFBBVFhBnGBkaHwEyKxwdEy4fEjQlIVYoKSBxQW/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAdEQEBAQEAAwEBAQAAAAAAAAAAARECEiExQRMD/9oADAMBAAIRAxEAPwDzTD4oGxt1UyIVENRGHy5Lnx3RcLkxdZA7lMPSXKYg7IZHmi5lXeZMohdEWJTCkLBDcVSDG6I0QotG6k5xQEXOTMCUqzgwMwnTUpk6LuCVC0PY3MCNN/LdUDSIJDgQdwRB8QtDh8TKsYmiyu3I+zv7H7joebeimnLGRKZGxNFzXFrhDm2I+46IJKYS0TkJmDqjEX8fugzA2UgokSpt6pBIuAuVXjee9SeZUGpxKQUwPJINUmNi4TGDBLKh03ZkcFIxA23v0ScdgEs06bKTGpHEXcgnUXqYEQngEpiUZtPfZDolFc/SUEYMnw1RIm2wCfQD0R6dgI8Ugpu5C6kykffJXS9ovrtpvsENk2Np1j8JkTa94gi3O3hyVm3L0VV5gw735JNI/wAiEjY4XKIAFFospaIM8JZUgEz6k22QA3OTgpQmcUyM9yYJiYTSnidSBTkoco1Jk3QCYxWKdgmpsUhoUjsyOrwyYC7FOjaVzuFsiASu2yjuPRVWUc7i3D/itzAf1G6R/e3/ABPXl5brL5d9tlu8h1Fis3xrAQ7M0Q15Mj/F+47jqpjXmuUwz71RKwuoSjkadw+gRasIN8FFyITpKSRIFiiGI7Gz3qJF7pyjEW6ouyiWJ4sPfT7IIsim0c78vfNRYeSI13NGASk2AruGwL3iRZu7jYeHNWeGcLFn1NNQzn1PILq1r/YbDuCmnrnU+E0/7nuJ6AAeRVbG4YMdlbuJnmuplVfibflaRzI+6ITm5LToBqhU3SZi2ylVq5oYNBqeZRJgQPFUFikBF7deXNHotEy42iw5qqHTEq1Tp53CnBIjM4iflGwkbk/dBBlz3Q8ABokDnO7o35JCo0966VXa1hYdFWfQDjO/MflGngDWFpMAEHmiiiNyR0AB+6c03DWSOmviOSt0agyiDI8vDVAeftTSpOKC9/JICOfsFBqi1TAQCCYBNKcd6ATmWQpVkFQcwFVCsBE2srYdCGwREozggcxHOi0G38UFGwrrnu+6IfXxosK0SLFdvDtI09+RXHpsljXjbVdXCViQIdPcAispFg93ht+y5mJpA5mH+6O+247pXYLieXldQdgs0GPfRJTC43BuY+Dobg7e9VCobDqB9SF6G/grHtyu6fUfhBp9laZN9IgeZ/KS/J5+5t1FrYK3eM7G3lh13O3hvr6KnV7GvAABBcdeQHNB6ytM7KZ1uF08b2ZrMcwBubMCZGljB+oS4hwV9JhL/YgGT5nyQNc1tO/vonq0737lJhgtPMAnuygmfVD+ODY89OqMHlKgGc1ewNKCCRP+LdfNALhFj4fddbg+HJGZ31QnXSwNJ1y6TKsVB0RKdAdY70qrRB+iQkUwLqjx6rlawDV0rosaqPHQCWN1GX7/ALIinGoGOcq1TcYQDSI0uOR+xVvBhrjGkc9VaEmlrW5zzAjdxNgB1ldDBYp1JpDhmk5iRqDyjkBAQaUPcHQBTbIpk6E6F31A/dLEkgwY7wkqL7B8W4c3WYNjpyQ3RNwfwSq3wtDy3BVqk+IOp338xupUNh6YDrmdLDVO/DNcZgIdSp8QiGtAAIMCN+XiVMOdsCmbzV91EIjWp8qaEI81EFFKjKAeVFKFINsgGBUw9Nl5JgExqRIUmlDhTDkGaUWi8BwkwCYnvt5IYamdSLrdQiFWy4NTlsWg2+y6+FwOXV3cAufwWgGU25rggfMF1WMiRMjnoQlqcW2gJzUAVV1a19t+fepYal8Te1tNQRdILlBznEDvv4QPr6K9h8K4tAJgxdSw9LKAFdooPBKFDKIUn0x6QiNCmGpaeK7qAgW0CxH/AJA4c/4ZqMNhOboCNfASvQC1VMZSDmlpEgiIPJOVPU14zxGiWh8t2LW+LiI/6krjN+UXHzkenPovVOLcIDjp8vywB/t0HvmsTxfhuVzp7yY0N/lFtAI7lprLLHIw7DIhwPONvFarhjxYeUSshRc5hgjwv7/ld/AVc0RE8hE+uymr5ahjxFw7vCYnk6RyOqp0Kp0Ou/RXaTZN9OahrgjKdlnOKuLqriNNB3NsfWVpMZiRTpuf4NHVZbKCSQTMpwU+HqbHe0KTqGf5co5F28bwoOburWHHyiLHf+FST0sS5sUz8zQBoLgDSQNfBWvhyJEQNOqpimZLo8Pwp0qkOOx97bqaocEtN5+oRKlSWn5oMyELD18w+ex9PHkploGsRr/CDFo4Y3deTEkGR5K4zEuZbygg7DnogYdo1B8+5HZQBEwT5/ZLSebSlKhKdVhakQokIgFlEpAOFONwmcEh180wclPMpvqkmCSCUqWVAM1Gw0TBmDa2o5EDdCGq2fZHs8CBVqCf8RYg9UqK7PCOGkUGN5Tc7gmdPFFrUgwRa2krsB2yapgQ4FToZh+La0lxMDvXP/8AqQXQ2e8NJHdIC5vH6gz1XEyykcuXY1DeD0Eiyx1fEvcZLj0AMAdwCrnnWfXXi9j4T2jbU+R0Tsb+oMEFaXD1bLwvh1Z7X5c+YCCHNJLQYBiSAeYI5i2i9c7PY01cOx51Iv3gwlZi+evKa0dKorAK5mFcrudSoSo+FVc6QhYqsqZr5Wl7jAF0AWpTlZ3j+EeR8uX8ws12g7d1JLcOBA1e647mjfv0WcPaLFvu55cOmg/4j8LSSsurPg3EcM5pIdY8+feT4oGBqFrrEgHU8uqOMd8QS4NDueSZ9ZVX4lwDoeWh+4TxDZ8PrAi110Qwz0Wc4U/w5ARfvK1eFojJLt1nfTq5vpx+OvzZAJgT46LnBwBV/j9YBzWDqT46fRcwm4Fv2/KcTaIBmObWNBp4pMrOE2t1SEWA5JVAdvH+E0rlMmNoi26b4Nzuq1NsQJge9leaYF/OUj1VbTOaDYdUst4AETpsVzeJdoadMFrPmdudlwK/Hqh0Mdyqc1F/0kehMgiBAM6LpMpmBDo8V5Vh+M1Af1O6QfcK83tC4a1HeGifgj+ik5InknamhTrQmuRhogEJNcUYejhqaE4MpEJKQKcp4ShPRhg1OEyRQS/wnDipVa06E37l6nhGhrABoF5v2TH9cdAV6Kx1lNIdjrro4dclj7q9RrhI2M7adm3xUNNpLXkPlokh2lwNojyXntajXdlpuaSGDK2AAAJnUC9+d19ACrOqr4nBUnfqY0nmQFU6sR3x5PIOF8N+Exz36kWb12/lei9k6eTC02kRAuDrJurVbhNJ1ixsAzECJ+6I4gWFgEvv1fMkmRap1IRBXVA1woMxKF4t1HSVm+2lcmmKLTGdwDiNcs3+4Xcc/QhcDtNgX1G5qYlwc23SRz05pk824xhHtJIYRTa7IHR8uaJidyqjCBDqZcHBsvzQBOY2ZH6hly631Wx472brVGy0O1JIbJaToTl2KztHs5iCYdSeBucr9PLvWnPUz25euLKvfBgscywrMzZeTh+sDpp5rl4z5XkOBHfdbbA9nqr3U3ua6nSotIbmGVz3HU5dQ3vVDi2GkkCS0dB9So5rTqenFwPE3M/TE76++i2PDu0QfTMABwGh590rAYvCGmZaD3clZwFfK8ON+aq8yp57sru1Q+o/QucblWaPDamzCtRw1zHMDmtFwOSuBqnWjJ/6Y8bJPwzmi/8AC1Fan0XLxuGkGEfStrL1+IsZqTPJZ7ifHKlQkA5W8h912uMcPiZk+EevJZjE0oNuavmRl1aqpBTLUxWjNEKSaVAoDuuaUyskKD2LndmApiE7m8kgJVQjNCIKgUITQkJ6EKUqElFCFIBIhTy9CnaOhTFdPsw8CsOoIW/Y+y874QT8ZkNi42+5W9FSymo0Z9VHwp3Nlzy/mrDayk3SFU80QVSuW2v3I1LEDuQazisVkaSRouPU4mHaQAurnBF7rg8a4RTcJAseR+4RGnGfq+2pKlIhcTBu+HTawEnLaTrqYH28FHitSq6nFF2V0iSRJjcCd9EOi8u3QxYBgrqUSIWS4ZwnEvA+JVAHMABx+y1GFoZGhoMgc9U9c/Un46FDLyVoOC5RqKTKvVDN0a9JjhBCx3HOz8k5Yjl7uu7VxRbdIVg4SjU9e3n2N4CWUXOdPOJNo3CyVKxyj1XteJoB7C07heX8b4O6k+dptYnfmr5rLqNT2Jqk0yDeNFqAFlOwtIkk2iL81tPhLOtefioaarVsPK6fwk/w0SnYzmK4a0/q8lleMcOYwHKI79PPRej16EhZ3i3Dw7XXbeOoCuVlY8pxNMA393QneQWp4vwtrRGa/W5HgFl8RTgxN+S1jOwM07pnNUg7+UT4I3RpO4QoDuUw9IBYuvQsp29VAhHCWXaEAGJChCMnySgBDkmNiiFgCXoqIw62+vkpOcNLn0UDS3EJgwbnyTGul2ff/WbAj66cytwCsRwVwFRpFh9Z99y173KOkpVX3QXVo1ThCqsSCNXHhtrBHpcRBGq5WMws3VYYODYkHofsmqNMMYNrFRq4udz5LOn4g0Pmlmqe7p40lXcTUGYAfwr1EAGT+yz785g2VpuMfF2nzRjT+jWUMVAAj6/hWDi+gWRbxMi1+8Iv+sCIM+v2SxjWmqYo7Qk2vfZZccTBt+furbMT/KWJ13X1Rp6Kjhaha6JQaVcmx12PvuRqLc10k2u5h3SFzeMYIVAQWm+4H3V/BCN1dsUFXK7NcLFJsb8913S1LDMvZHc1KrnxWyJi0qzkUcqDVXUpXK4jhhqYWgyIFXDgjROIseZ8VwFHPLptMDbyCynFqDQf6YsddF61xTA2IaxviJ9FiOM8IN7+Qb6XstOemVjBmxRR4p8Vhy0xHmQnuNQ3zj6FaJdZhUw6bhV3P5JmErHG+rLio5lHNKmEKlSY+drpi26jkhSa/Y6IUaVF7IUzew996C6tqNY32/dNNMSTrAHvzTBw2E9T+PyhzNzdHFMC7rchufwqKLPD5L2knSPAT7stsFjuFHNUaAIE6LZuEXUdEaFF7VMKUKQqFqYNVh9NAcmNRLQmNMeKklmT1WhGh4oZwqsZlLdGnqj/AOoAkcKB0VmrWEWQs5RpWqT6AVqi0wpZEam1JCzhW399FbpVYKBTKNSbfT3skHZwrpghdCiuXhF08PdKU16gEUhKk2ycqauINRMqZrEYNQEAxRcxHyqL2o0nI4hStYE9ywnHqdcyMpa3vEnyvC9KrMss9xRwvId33+y05Z9R5BxKkTcNaT5+kfZUWaXdHSAtnxZ14DzBNxkJ+1lna5v+kn/itYzquAnTgJwoaxEKdOrzQ3pMF+m6rPQ1ckQhgEIJfCmawIsb/RTitPVqWgeKCRNlPLy81Auj8pklYaa8+Xd+UN3qUp5IrA1pkw53LYd/NMa63Zyic87c1sXiWrH8BxHzyddBp6D8LY0jZR0aq1yIHp8TSQM0JEshQcxQa9TzpEC5sIZR3OUS1AVJUXVVZdRQnYdAVHG6IxGGGRWYfZAAborOHpzqjUsMrtGkEAJlK6uUqd1OkyVaYErQemF08KxVaYldKi1SqDsCmWpwE4CRna1Ea1IBSCAUKLgpyokICpVaFweL4SdSRyuQtJUAXNxbPf7LTlNjzbi+DYAQSfMj6RKzb8GCbVnDxP5W37Q4QCYYNf7YHobFYuvU+Y/03joCVrGVUk6SSTShRdO4JJIBtlXFO8pJJpGnb1TAe9kkkxpi7l7/AAogpJJLi5w+sWvBn6Le4OtLR4JJKegs6qtUp3SSUEjkUYKSSAcBSCSSARcolySSAZrlPOkkgC4dyv0u9JJKms0QEem0lJJQHRwtJXqdOUkkGs0kUMTpJwztEJykkgIuCgUkkBBxVLF07awkknynpi+P2kOJE6G0ev5WQrPqgwIcOZifGRKSS25ZV//Z",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6N9qYpuZf8ZCBTHdf5FcZBZNL4HzIiPUHg&s",
    content: "블로그 내용 2",
    animal: "고양이",
    postUrl: "/blog/2",
    username: "작성자2",
  },
  {
    id: 3,
    title: "블로그 제목 3",
    date: "게시한 날짜",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF4PavbKVrn4ntmROrzOf_fqT6bBQPcUmLw&usqp=CAU",
    content: "블로그 내용 3",
    animal: "강아지",
    postUrl: "/blog/3",
    username: "작성자3",
  },
  {
    id: 4,
    title: "블로그 제목 4",
    date: "게시한 날짜",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlI0mnjLCCSXSevxxd9ueUHyB1gyAJuFbrZw&s",
    content: "블로그 내용 4",
    animal: "고양이",
    postUrl: "/blog/4",
    username: "작성자4",
  },
  {
    id: 5,
    title: "블로그 제목 5",
    date: "게시한 날짜",
    imageUrl:
      "https://image.fmkorea.com/files/attach/new3/20230217/33854530/12493541/5504264766/022406645351bfed5fd2a08a1872b02d.jpeg",
    content: "블로그 내용 5",
    animal: "고양이",
    postUrl: "/blog/5",
    username: "작성자5",
  },
  {
    id: 6,
    title: "블로그 제목 6",
    date: "게시한 날짜",
    imageUrl:
      "https://img.danawa.com/images/descFiles/6/110/5109431_agiLaciMHn_1659098198501.jpeg",
    content: "블로그 내용 6",
    animal: "고양이",
    postUrl: "/blog/6",
    username: "작성자6",
  },
  {
    id: 7,
    title: "블로그 제목 7",
    date: "게시한 날짜",
    imageUrl:
      "https://i.pinimg.com/564x/81/b7/e5/81b7e52a523e1ccf0dc4a8e360914654.jpg",
    content: "블로그 내용 7",
    animal: "고양이",
    postUrl: "/blog/7",
    username: "작성자7",
  },

  // 추가적인 블로그 데이터
  // ...
];

export const BestBlog = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 4 }}>
      <Grid item xs={12} /* sm={3} */>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          style={{ padding: "0 90px 10px" }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {blogData.map((post) => (
            <SwiperSlide key={post.id}>
              <Card>
                <CardActionArea href={post.postUrl}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={post.imageUrl}
                    alt={`블로그 포스트 ${post.id}`}
                  />
                  <CardContent>
                    <h2>{post.title}</h2>
                    {/* <p>{post.date}</p> */}
                    {/* <p>{post.content}</p> */}
                    <p>{post.username}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};
