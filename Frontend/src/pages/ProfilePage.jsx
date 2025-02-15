import React, { useState } from "react";
import "../ProfilePage.css";

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email] = useState("johndoe@example.com");
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleEdit = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    setName(newName);
    handleClose();
  };

  const handleLogout = () => {
    alert("Logged Out!");
    // Add logout logic here
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>{name} <span className="edit-icon" onClick={handleEdit}>✏️</span></h2>
          <p>{email}</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {open && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Name</h3>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleClose}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
