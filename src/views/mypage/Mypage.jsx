import { useAuthStore } from "../../store/useAuthStore";
import { Logout } from "../login/Logout";
import React, { useState } from "react";
import Profile from "./Profile";
import "./Profile.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import axios from "axios";

export const Mypage = () => {
  const [personProfile, setPersonProfile] = useState({
    Me: "내정보",
    name: "보호자 이름",
    id: "아이디",
    tel: "전화번호",
    blogPosts: ["블로그 ", "내용", "입니다."],
  });

  const [animalProfiles, setAnimalProfiles] = useState([
    {
      name: "동물 이름 1",
      species: "강아지",
      bio: "성별",
      profilePic: null,
    },
  ]);
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [animalname, setAnimalName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const { isAuthenticated, username } = useAuthStore();

  const updateAnimalProfile = (updatedAnimalProfile) => {
    setAnimalProfiles((prevProfiles) => {
      const newProfiles = [...prevProfiles];
      newProfiles[currentAnimalIndex] = updatedAnimalProfile;
      return newProfiles;
    });
  };

  const addAnimalProfile = async () => {
    const newAnimalProfile = {
      // pet_id: 1,
      pet_name: animalname,
      pet_type: animalType,
      sex: gender,
      img: photo,
    };

    try {
      const response = await axios.post(
        "http://203.241.228.51:8000/mypage/pets/",
        newAnimalProfile
      );
      console.log(response.data); // 서버로부터의 응답 확인
      setAnimalProfiles((prevProfiles) => [...prevProfiles, newAnimalProfile]);
      closeModal();
    } catch (error) {
      console.error("Error adding animal profile:", error);
      // 에러 처리 로직 추가
    }
  };

  const nextAnimalProfile = () => {
    setCurrentAnimalIndex(
      (prevIndex) => (prevIndex + 1) % animalProfiles.length
    );
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "4px",
  };

  return (
    <div className="profile-page">
      <div className="animal-profile-navigation">
        <Button variant="text" onClick={nextAnimalProfile}>
          다음
        </Button>
        <Button variant="text" onClick={openModal}>
          추가
        </Button>
        <Modal open={isOpen} onClose={closeModal}>
          <Box sx={modalStyle}>
            <div className="popup-content">
              <h1>모달</h1>
              <TextField
                label="반려동물 이름"
                variant="outlined"
                fullWidth
                margin="dense"
                value={animalname}
                onChange={(e) => setAnimalName(e.target.value)}
              />
              <TextField
                label="반려동물 종"
                variant="outlined"
                fullWidth
                margin="dense"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
              />
              <TextField
                label="성별"
                variant="outlined"
                fullWidth
                margin="dense"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <Input
                type="file"
                fullWidth
                margin="dense"
                onChange={handlePhotoChange}
              />
              <Button variant="text" onClick={addAnimalProfile}>
                완료
              </Button>
              <Button variant="text" onClick={closeModal}>
                닫기
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="profiles">
        <Profile
          user={animalProfiles[currentAnimalIndex]}
          updateUser={updateAnimalProfile}
          isPet={true}
        />
        <Profile
          user={personProfile}
          updateUser={setPersonProfile}
          isPet={false}
        />
      </div>
      <div className="blog-section">
        <h3>내가 쓴 블로그</h3>
        {personProfile.blogPosts && personProfile.blogPosts.length > 0 ? (
          <ul>
            {personProfile.blogPosts.map((post, index) => (
              <li key={index}>{post}</li>
            ))}
          </ul>
        ) : (
          <p>No blog posts</p>
        )}
      </div>
      <p>{isAuthenticated ? <Logout /> : null}</p>
      <p>{isAuthenticated ? username : "LOGIN"}</p>
    </div>
  );
};
