import React from "react";
import "../tutorReq.css";
import Navbar from "../components/navbar"; 

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Tutor Match</strong>, the ultimate platform connecting students with expert tutors!
            We believe that quality education should be accessible to everyone, and our goal is to make learning easier,
            personalized, and more effective.
          </p>
          <p>
            With <strong>Tutor Match</strong>, students can find qualified tutors in various subjects, ensuring they get
            the best guidance tailored to their learning needs. Our platform provides:
          </p>
          <ul>
            <li><strong>✅ Verified Tutors:</strong> Experienced professionals across different subjects.</li>
            <li><strong>✅ Seamless Matching:</strong> Find the perfect tutor based on your requirements.</li>
            <li><strong>✅ Flexible Learning:</strong> Choose online or in-person sessions that fit your schedule.</li>
            <li><strong>✅ Easy Registration:</strong> A simple process for both students and tutors to connect hassle-free.</li>
          </ul>
          <p>
            At <strong>Tutor Match</strong>, we are committed to fostering a supportive learning environment that empowers students
            and helps tutors grow their careers. Whether you're looking to improve your grades or share your expertise, we’ve got you covered!
          </p>
          <p><strong>Join us today and take the next step toward academic success!</strong></p>
        </div>
        
        <div className="about-image">
          <img src="/images/about.jpg" alt="About Tutor Match" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
