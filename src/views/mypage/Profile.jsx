import React, { useState } from 'react';

const Profile = ({ user, updateUser, isPet }) => {
  const [profilePic, setProfilePic] = useState(user.profilePic);

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
        <>
          <p>반려동물 종: {user.species}</p>
          <p>성별: {user.bio}</p>
        </>
      ) : (
        <p>아이디: {user.id}</p>
      )}
      
      {isPet ? <p>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
      {profilePic && <img src={profilePic} alt="Profile" className="round-img" />}
      </p> : <p>전화번호: {user.tel}</p>}
    </div>
  );
};

export default Profile;
