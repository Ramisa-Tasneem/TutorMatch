import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/logo.png" alt="TutorMatch Logo" />
            </div>

            <div className="nav-links">
                <Link to="/Home" className="nav-btn">Home</Link>
                <Link to="/about-tutors" className="nav-btn">About Tutors</Link>
                <Link to="/tutor-request" className="nav-btn">TUTOR REQUEST</Link>
                <Link to="/courses" className="nav-btn">COURSES</Link>
                <Link to="/find-tutions" className="nav-btn">Find Tuition</Link>
                <Link to="/post-tution" className="nav-btn">Post a Tuition</Link>
            </div> 

            <div className="auth-buttons">
                <Link to="/register" className="auth-btn">
                    <FaUserPlus className="icon" /> Register
                </Link>
                <Link to="/login" className="auth-btn">  {/* ✅ FIXED: Properly closed */}
                    <FaSignInAlt className="icon" /> Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
