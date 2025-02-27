
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

import "/src/ProfilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }


    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    } else {
      setError("User data is missing.");
    }
  }, [navigate]);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>

        <div className="profile-info">
          {error ? (
            <p className="error-message">{error}</p>
          ) : user ? (
            <>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>

            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

    </>
  );
};

export default ProfilePage;

