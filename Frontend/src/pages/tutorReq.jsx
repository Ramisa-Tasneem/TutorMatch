import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../tutorReq.css"; // Ensure the correct path

const TutorRequest = () => {
  return (
    <div className="tutor-request-container">
      <Navbar />
      <div className="tutor-content">
        <h1>আপনি কি টিউটর খুঁজছেন?</h1>
        <p>তাহলে ফর্মটি পূরণ করে জানান আপনি কোন ক্লাস/এরিয়ার জন্য টিউটর খুঁজছেন। </p>

        <div className="form-container">
          <form>
            <label>Student Name:</label>
            <input type="text" placeholder="Enter student name" required />

            <label>Parent's Name:</label>
            <input type="text" placeholder="Enter parent's name" required />

            <label>Parent's Email:</label>
            <input type="email" placeholder="Enter parent's email" required />

            <label>Phone No.:</label>
            <input type="tel" placeholder="Enter phone number" required />

            <label>Class:</label>
            <select required>
              <option value="">Select Class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="HSC 1st Year">HSC 1st Year</option>
              <option value="HSC 2nd Year">HSC 2nd Year</option>
            </select>

            <label>Subject:</label>
            <input type="text" placeholder="Enter subject(s)" required />

            <label>City:</label>
            <input type="text" placeholder="Enter city" required />

            <label>Area:</label>
            <input type="text" placeholder="Enter area" required />

            <label>Preferred Time:</label>
            <select required>
              <option value="">Select Time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>

            <label>Preferred Salary:</label>
            <input type="number" placeholder="Enter expected salary" required />

            <label>Medium:</label>
            <select required>
              <option value="">Select Medium</option>
              <option value="Bangla Medium">Bangla Medium</option>
              <option value="English Medium">English Medium</option>
              <option value="English Version">English Version</option>
            </select>

            <label>Description:</label>
            <textarea placeholder="Enter additional details"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Add chart image anywhere on the page */}
        <div className="chart-container">
        <img src="/images/chart.png" alt="Chart" className="chart-image" />

        </div>

      <Footer />
    </div>
  );
};

export default TutorRequest;
