import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../tutorReq.css";

const TutorRequest = () => {
  const initialFormState = {
    StudentName: "",
    ParentName: "",
    ParentEmail: "",
    PhoneNumber: "",
    Class: "",
    Subject: "",
    City: "",
    Area: "",
    Time: "",
    Salary: "",
    PreferredMedium: "",
    ShortTuitionDescription: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/post-tuitions", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Tuition request submitted successfully!");
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error submitting request:", error.response?.data || error.message);
      alert("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tutor-request-container">
      <Navbar />
      <div className="tutor-content">
        <h1>আপনি কি টিউটর খুঁজছেন?</h1>
        <p>তাহলে ফর্মটি পূরণ করে জানান আপনি কোন ক্লাস/এরিয়ার জন্য টিউটর খুঁজছেন। </p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="StudentName" placeholder="Student Name" value={formData.StudentName} onChange={handleChange} required />
              <input type="text" name="ParentName" placeholder="Parent's Name" value={formData.ParentName} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <input type="email" name="ParentEmail" placeholder="Parent's Email" value={formData.ParentEmail} onChange={handleChange} required />
              <input type="tel" name="PhoneNumber" placeholder="Phone No." value={formData.PhoneNumber} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <select name="Class" value={formData.Class} onChange={handleChange} required>
                <option value="">Select Class</option>
                {["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "HSC 1st Year", "HSC 2nd Year"].map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>

              <input type="text" name="Subject" placeholder="Subject" value={formData.Subject} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <input type="text" name="City" placeholder="City" value={formData.City} onChange={handleChange} required />
              <input type="text" name="Area" placeholder="Area" value={formData.Area} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <select name="Time" value={formData.Time} onChange={handleChange} required>
                <option value="">Select Time</option>
                {["Morning", "Afternoon", "Evening"].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>

              <input type="number" name="Salary" placeholder="Preferred Salary" value={formData.Salary} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <select name="PreferredMedium" value={formData.PreferredMedium} onChange={handleChange} required>
                <option value="">Select Medium</option>
                {["Bangla Medium", "English Medium", "English Version"].map((medium) => (
                  <option key={medium} value={medium}>{medium}</option>
                ))}
              </select>

              <input type="text" name="Type" placeholder="Type" value={formData.Type} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <textarea name="ShortTuitionDescription" placeholder="Description" value={formData.ShortTuitionDescription} onChange={handleChange}></textarea>
            </div>

            <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
          </form>
        </div>
      </div>

      <div className="chart-container">
        <img src="/images/tutorReq.jpg" alt="Chart" className="chart-image" />
      </div>
      <Footer />
    </div>
  );
};

export default TutorRequest;
