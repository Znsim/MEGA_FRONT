import { Photo } from '@mui/icons-material';
import React, { useState } from 'react';

const Profile = ({ user, updateUser, isPet, isAuthenticated, username }) => {
  // const [profilePic, setProfilePic] = useState(user.profilePic);
  
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        updateUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      {isPet ? (
          <p>반려동물 종: {user.species}</p>
        
      ) : (
         <p>{isAuthenticated ? username : " 로그인.."}</p>
      )}

      {isPet ? (
        <p>
          <p>성별: {user.bio}</p>
        </p>
      ) : (
        <p>전화번호: {user.tel}</p>
      )}
    </div>
  );
};

export default Profile;
