import React, { useState } from "react";
import "../applynow.css"
import axios from "axios";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hscYear: "",
    sscYear: "",
    currentStudentAt: "",
    studentId: null,
    nationalId: null,
  });

  const years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    try { 
        const response =await axios.post ('http://localhost:8000/api/applicant',formData)
       console.log(response.data) 
    } catch (error) {
        console.log(error)
        
    }
    console.log("Form Submitted:", formData);
    
  };

  return (
    <div className="apply-form-container">

      <h2 className="form-title">Apply Now</h2>
      

      <form onSubmit={handleSubmit} className="apply-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

        <select name="hscYear" value={formData.hscYear} onChange={handleChange} required>
          <option value="">Select HSC Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select name="sscYear" value={formData.sscYear} onChange={handleChange} required>
          <option value="">Select SSC Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <input type="text" name="currentStudentAt" placeholder="Current Student At" value={formData.currentStudentAt} onChange={handleChange} required />

        <label>Upload Student ID:</label>
        <input type="file" name="studentId" onChange={handleFileChange} accept="image/*" required />

        <label>Upload National ID Card:</label>
        <input type="file" name="nationalId" onChange={handleFileChange} accept="image/*" required />
        <div className="submit-btn-container">
  <button className="submit-btn">Confirm</button>
</div>

       {/*  <button type="submit" className="submit-btn">Confirm</button> */}
      </form>
    </div>
  );
};

export default ApplyNow;

