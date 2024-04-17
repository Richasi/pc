import React from 'react';

const EditProfile = ({ name, email, bio }) => {
  return (
    <div>
      <h2>Edit Profile</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" defaultValue={name} /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" defaultValue={email} /><br />
      <label htmlFor="bio">Bio:</label>
      <textarea id="bio" defaultValue={bio}></textarea>
    </div>
  );
};

export default EditProfile;
