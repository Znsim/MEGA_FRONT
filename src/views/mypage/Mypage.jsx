import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Profile from "./Profile";
import { useAuthStore } from "../../store/useAuthStore";
import { useLogout } from "../login/Logout";
import "./Profile.css"; // CSS 파일 import

export const Mypage = () => {
  const [personProfile, setPersonProfile] = useState({
    Me: "내정보",
    name: "보호자 이름",
    id: "아이디",
    email: "이메일",
    blogPosts: null,
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
  const [istnwjdOpen, settnwjdIsOpen] = useState(false);
  const [animalname, setAnimalName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);

  const { isAuthenticated, email } = useAuthStore();

  const updateAnimalProfile = (updatedAnimalProfile) => {
    setAnimalProfiles((prevProfiles) => {
      const newProfiles = [...prevProfiles];
      newProfiles[currentAnimalIndex] = updatedAnimalProfile;
      return newProfiles;
    });
    closetnwjdModal();
  };

  const tnwjdupdateProfile = () => {
    const updatedAnimalProfile = {
      ...animalProfiles[currentAnimalIndex],
      name: animalname || animalProfiles[currentAnimalIndex].name,
      species: animalType || animalProfiles[currentAnimalIndex].species,
      bio: gender || animalProfiles[currentAnimalIndex].bio,
      profilePic: photo || animalProfiles[currentAnimalIndex].profilePic,
    };
    updateAnimalProfile(updatedAnimalProfile);
  };

  const addAnimalProfile = () => {
    const newAnimalProfile = {
      name: animalname,
      species: animalType,
      bio: gender,
      profilePic: photo,
    };
    setAnimalProfiles((prevProfiles) => [...prevProfiles, newAnimalProfile]);
    closeModal();

    setAnimalName("");
    setAnimalType("");
    setGender("");
    setPhoto(null);
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

  const opentnwjdModal = () => {
    settnwjdIsOpen(true);
  };

  const closetnwjdModal = () => {
    settnwjdIsOpen(false);
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

  const handleLogout = useLogout();

  return (
    <div className="profile-page">
      <div
        className="animal-profile-navigation"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button variant="text" onClick={nextAnimalProfile}>
          다음
        </Button>
        <Button variant="text" onClick={openModal}>
          추가
        </Button>
        <Button variant="text" onClick={opentnwjdModal}>
          수정
        </Button>
        <div style={{ marginLeft: "auto" }}>
          {isAuthenticated ? (
            <Button
              variant="text"
              onClick={handleLogout}
              className="logout-button"
            >
              로그아웃
            </Button>
          ) : null}
        </div>
        <Modal open={isOpen} onClose={closeModal}>
          <Box sx={modalStyle}>
            <div className="popup-content">
              <h1>정보 추가</h1>
              <TextField
                // label="반려동물 이름"
                placeholder="반려동물 이름"
                variant="outlined"
                fullWidth
                margin="dense"
                value={animalname}
                onChange={(e) => setAnimalName(e.target.value)}
              />
              <TextField
                // label="반려동물 종"
                placeholder="반려동물 종"
                variant="outlined"
                fullWidth
                margin="dense"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
              />
              <TextField
                // label="성별"
                placeholder="성별"
                variant="outlined"
                fullWidth
                margin="dense"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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

      <div>
        <Modal open={istnwjdOpen} onClose={closetnwjdModal}>
          <Box sx={modalStyle}>
            <div className="popup-content">
              <h1>정보 수정</h1>
              <TextField
                // label=""
                placeholder="반려동물 이름"
                variant="outlined"
                fullWidth
                margin="dense"
                defaultValue={animalProfiles[currentAnimalIndex]?.name}
                // value={ || ''}
                onChange={(e) => setAnimalName(e.target.value)}
              />
              <TextField
                // label="반려동물 종"
                placeholder="반려동물 종"
                variant="outlined"
                fullWidth
                margin="dense"
                defaultValue={animalProfiles[currentAnimalIndex]?.species || ""}
                onChange={(e) => setAnimalType(e.target.value)}
              />
              <TextField
                // label="성별"
                placeholder="성별"
                variant="outlined"
                fullWidth
                margin="dense"
                defaultValue={animalProfiles[currentAnimalIndex]?.bio || ""}
                onChange={(e) => setGender(e.target.value)}
              />

              <Button variant="text" onClick={tnwjdupdateProfile}>
                완료
              </Button>

              <Button variant="text" onClick={closetnwjdModal}>
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
      <p>{isAuthenticated ? email : "LOGIN"}</p>
    </div>
  );
};
