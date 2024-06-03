<<<<<<< HEAD
import { useAuthStore } from "../../store/useAuthStore";
import { Logout } from "../login/Logout";

export const MyPage = () => {
  const { isAuthenticated, username } = useAuthStore();
  return (
    <>
      <p> {isAuthenticated ? username : "LOGIN"} 마이페이지</p>
      {isAuthenticated ? <Logout /> : null}
    </>
  );
};

//logout 버튼을 누르면 로그인 페이지로 넘어가기
=======
import React, { useState } from 'react';
import Profile from './Profile';
import "./Profile.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

const Mypage = () => {
  const [personProfile, setPersonProfile] = useState({
    Me: '내정보',
    name: '보호자 이름',
    id: '아이디',
    tel: '전화번호',
    blogPosts: ['블로그 ', '내용', '입니다.']
  });

  const [animalProfiles, setAnimalProfiles] = useState([
    {
      name: '동물 이름 1',
      species: '강아지',
      bio: '성별',
      profilePic: null,
    }
  ]);
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [animalname, setAnimalName] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);

  const updateAnimalProfile = (updatedAnimalProfile) => {
    setAnimalProfiles((prevProfiles) => {
      const newProfiles = [...prevProfiles];
      newProfiles[currentAnimalIndex] = updatedAnimalProfile;
      return newProfiles;
    });
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
  };

  const nextAnimalProfile = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animalProfiles.length);
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
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '4px',
  };

  return (
    <div className="profile-page">
      <div className="animal-profile-navigation">
        <Button variant="text" onClick={nextAnimalProfile}>다음</Button>
        <Button variant="text" onClick={openModal}>추가</Button>
        <Modal open={isOpen} onClose={closeModal}>
          <Box sx={modalStyle}>
            <div className="popup-content">
              <h1>모달</h1>
              <TextField
                label="반려동물 이름"
                variant="outlined"
                fullWidth
                margin="normal"
                value={animalname}
                onChange={(e) => setAnimalName(e.target.value)}
              />
              <TextField
                label="반려동물 종"
                variant="outlined"
                fullWidth
                margin="normal"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
              />
              <TextField
                label="성별"
                variant="outlined"
                fullWidth
                margin="normal"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <Input
                type="file"
                fullWidth
                margin="normal"
                onChange={handlePhotoChange}
              />
              <Button variant="text" onClick={addAnimalProfile}>완료</Button>
              <Button variant="text" onClick={closeModal}>닫기</Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="profiles">
        <Profile user={animalProfiles[currentAnimalIndex]} updateUser={updateAnimalProfile} isPet={true} />
        <Profile user={personProfile} updateUser={setPersonProfile} isPet={false} />
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
    </div>
  );
};

export default Mypage;
>>>>>>> f9ffadeb829618c3196a652f06e9dba1585a5ffd
