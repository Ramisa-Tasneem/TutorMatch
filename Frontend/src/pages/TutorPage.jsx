import axios from "axios";
import React, { useEffect, useState } from "react";
import "../TutorPage.css"; // Import CSS file
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function TutorPage() {
  const [tutors, setTutors] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const navigate = useNavigate();

  const fetchTutors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/interested-tutors"
      );
      setTutors(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <>
      <Navbar />
      <div className="tutor-container">
        <h2>Interested Tutors</h2>
        <button onClick={() => navigate("/be-tutor-step")}>
          Want to be a tutor?
        </button>
        <div className="tutor-list">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="tutor-card"
              onClick={() => setSelectedTutor(tutor)}
            >
              <h3>{tutor.name}</h3>
              <p>
                <strong>Gender:</strong> {tutor.gender}
              </p>
              <p>
                <strong>Experience:</strong> {tutor.tutoring_experience}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTutor && (
        <div className="modal-overlay" onClick={() => setSelectedTutor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTutor.name}</h2>
            <p><strong>Gender:</strong> {selectedTutor.gender}</p>
            <p><strong>Qualification:</strong> {selectedTutor.qualification}</p>
            <p><strong>Location:</strong> {selectedTutor.location}</p>
            <p><strong>Experience:</strong> {selectedTutor.tutoring_experience}</p>
            <p><strong>Preferred Class:</strong> {selectedTutor.preferred_class}</p>
            <p><strong>Subjects:</strong> {selectedTutor.preferred_subjects}</p>
            <p><strong>Salary Expectation:</strong> {selectedTutor.expected_minimum_salary}</p>
            <button onClick={() => setSelectedTutor(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TutorPage;
