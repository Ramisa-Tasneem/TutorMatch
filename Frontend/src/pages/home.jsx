import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Home = () => {
    const featuredTuition = [
        { title: "Economics", location: "Goran", type: "Online", salary: "4k" },
        { title: "Bangla", location: "Gulshan", type: "Offline", salary: "6k" },
        { title: "Arabic", location: "Bannai", type: "Offline", salary: "2k" },
        { title: "Biology", location: "Demra", type: "Online", salary: "4k" },
        { title: "Physics", location: "Khilgaon", type: "Group", salary: "5k" },
        { title: "Higher Math", location: "Uttara", type: "Group", salary: "8k" },
    ];

    const categories = [
        { name: "English", count: 50 },
        { name: "Finance", count: 20 },
        { name: "Arabic", count: 25 },
        { name: "Data Science", count: 30 },
        { name: "Higher Math", count: 70 },
        { name: "Biology", count: 10 },
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
                <button className="find-tutor-btn">
                    Find a Tutor <FaArrowRight className="arrow-icon" />
                </button>
            </header>

            <section className="search-tuition">
                <h2 className="search-heading">Search Tuitions</h2>
                <p className="search-subheading">Find tuition near your preferred area</p>
                <div className="search-container">
                    <div className="search-left">
                        <img src="/images/moving-image.jpg" alt="Moving" className="moving-image" />
                    </div>
                    <div className="search-right">
                        <h3 className="right-subheading">Looking for interesting tuition jobs to excel in your teaching experience?</h3>
                        <p className="right-text">
                            If teaching jobs interest you, then you are in the right place. Here, we often have 100+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next tuition. You can search and apply to the tuition jobs that best fit your skills, preferred location, class, and subjects.
                        </p>
                        <button className="search-tuition-btn">
                            Search <FaArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </div>

                <div className="image-section">
                     <h2><br></br>Tuition Types</h2>
                     <p>Find the Best Tuition Type which Suits You Most</p>
               </div>
                
                
                
                
                
                
                <div className="tuition-types">
        <img src="/images/type1.png" alt="Type 1" className="tuition-type-img" />
        <img src="/images/type2.png" alt="Type 2" className="tuition-type-img" />
        <img src="/images/type3.png" alt="Type 3" className="tuition-type-img" />
    </div>
            </section>
         

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

            <section className="latest-tuition">
                <h2>Latest Tuition</h2>
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
