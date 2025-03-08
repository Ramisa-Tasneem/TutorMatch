import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/login-register.css";
import Navbar from "../components/navbar";

const Register = () => {
  const [role, setRole] = useState("tutor"); // Default role
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone: "",
    tuition_district: "",
    preferred_tuition_area: "",
    tutor_location: "", // Added Tutor Location field
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    const requestData = {
      role,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      ...(role === "tutor" && {
        gender: formData.gender,
        phone: formData.phone,
        tuition_district: formData.tuition_district,
        preferred_tuition_area: formData.preferred_tuition_area,
        tutor_location: formData.tutor_location, // Included Tutor Location in request
      }),
    };

    try {
      console.log("Sending registration data:", requestData);

      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (response.ok) {
        alert("Registration Successful!");
        setError("");
        navigate("/login");
      } else {
        setError(data.errors ? JSON.stringify(data.errors) : "Registration failed.");
      }
    } catch (err) {
      setError("A network error occurred, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-image">
          <img src="/images/register.jpg" alt="Register" />
        </div>

        <div className="register-form">
          <h2>REGISTER</h2>

          {/* Role Selection */}
          <div className="role-selection">
            <label className={`role-option ${role === "tutor" ? "selected" : ""}`} onClick={() => handleRoleChange("tutor")}>
              <input
                type="radio"
                name="role"
                value="tutor"
                checked={role === "tutor"}
                onChange={() => handleRoleChange("tutor")}
              />
              <img src="/images/tutorlogo.jpg" alt="Tutor" />
              <span className="role-text">Tutor</span>
            </label>

            <label className={`role-option ${role === "student" ? "selected" : ""}`} onClick={() => handleRoleChange("student")}>
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => handleRoleChange("student")}
              />
              <img src="/images/studentlogo.jpg" alt="Student" />
              Guardian
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

            <div className="password-container">
              <div>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              </div>
              <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
              </div>
            </div>

            {role === "tutor" && (
              <>
                <div className="gender-phone-container">
                  <div>
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <label>Tuition District</label>
                <input type="text" name="tuition_district" placeholder="District" value={formData.tuition_district} onChange={handleChange} required />

                {/* Preferred Tuition Area & Tutor Location in one row */}
                <div className="tuition-location-container">
                  <div>
                    <label>Preferred Tuition Area</label>
                    <input type="text" name="preferred_tuition_area" placeholder="Preferred Areas" value={formData.preferred_tuition_area} onChange={handleChange} required />
                  </div>
                  <div>
                    <label>Tutor Location</label>
                    <input type="text" name="tutor_location" placeholder="Your Location" value={formData.tutor_location} onChange={handleChange} required />
                  </div>
                </div>
              </>
            )}

            <button type="submit">{loading ? "Registering..." : "Register"}</button>
          </form>

          {error && <p className="error-message">{error}</p>}

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
