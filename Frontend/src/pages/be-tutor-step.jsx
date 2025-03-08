import { useState } from "react";
import "../tutor.css";
import Navbar from "../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BeTutorStep = () => {
  const [formData, setFormData] = useState({
    name: "",

    qualification: "",
    gender: "",

    tutoring_experience: "",
    location: "",
    preferred_class: "",
    preferred_medium: "all",
    preferred_subjects: "all",
    preferred_time: "all",
    expected_minimum_salary: "",
    preferred_tuition_style: "both",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/interested-tutors",
        formData
      );
      console.log("Response:", response);
      navigate("/tutorpage");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="tutor-container">
        {/* Left Side Image */}
        <div className="tutor-image">
          <img src="/images/be tutor.jpg" alt="Tutor Signup" />
        </div>

        {/* Right Side Form */}
        <div className="form-content">
          <h2>Become a Tutor</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="qualification"
                placeholder="qualification"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="preferred_medium"
                placeholder="Preferred Medium"
                required
                onChange={handleChange}
              />
              <select name="gender" required onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="expected_minimum_salary"
                placeholder="Expected salary"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="preferred_class"
                placeholder="Preferred Class"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <textarea
                name="tutoring_experience"
                placeholder="Tutoring Experience"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              required
              onChange={handleChange}
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BeTutorStep;

