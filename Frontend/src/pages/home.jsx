import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate function

    const featuredTuition = [
        { title: "Economics", location: "Goran", type: "Online", salary: "4k" },
        { title: "Bangla", location: "Gulshan", type: "Offline", salary: "6k" },
        { title: "Arabic", location: "Bannai", type: "Offline", salary: "2k" },
        { title: "Biology", location: "Demra", type: "Online", salary: "4k" },
        { title: "Physics", location: "Khilgaon", type: "Group", salary: "5k" },
        { title: "Higher Math", location: "Uttara", type: "Group", salary: "8k" },
    ];

    return (
        <>
            <Navbar />
            <header className="banner">
                <div className="banner-image"></div>
                <img src="/images/banner2.jpg" alt="Banner" className="banner2-image" />
                <h1 className="main-heading">Best Tutoring Platform <br /> for Home & Online Tuitions</h1>
                <p className="sub-heading">
                    <FaMapMarkerAlt className="location-icon" /> Find the Right Tutor in Your Area
                </p>
                <button className="find-tutor-btn" onClick={() => navigate("/tutor-request")}>
                    Find a Tutor <FaArrowRight className="arrow-icon" />
                </button>
            </header>

            <section className="featured-tuition">
                <h2><br></br>Featured Tuition</h2>
                <div className="tuition-list">
                    {featuredTuition.map((tuition, index) => (
                        <div key={index} className="tuition-card">
                            <h3>{tuition.title}</h3>
                            <p>Location: {tuition.location}</p>
                            <p>Type: {tuition.type}</p>
                            <p>Salary: {tuition.salary}</p>
                            <button className="details-btn">Details</button>
                            <button className="apply-btn">Apply now</button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
