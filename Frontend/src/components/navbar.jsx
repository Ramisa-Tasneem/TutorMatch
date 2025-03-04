import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged Out!");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/logo.png" alt="TutorMatch Logo" />
            </div>

            <div className="nav-links">
                <Link to="/" className="nav-btn">Home</Link>
                <Link to="/tutor-request" className="nav-btn">TUTOR REQUEST</Link>
                <Link to="/find-tutions" className="nav-btn">Find Tuition</Link>
                <Link to="/about-us" className="nav-btn">About Us</Link> 
            </div>

            <div className="auth-buttons">
                {token ? (
                    <>
                        <Link to="/profile" className="auth-btn">
                            <FaUserPlus className="icon" /> Profile
                        </Link>
                        <button onClick={handleLogout} className="auth-btn">
                            <FaSignInAlt className="icon" /> Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="auth-btn">
                            <FaUserPlus className="icon" /> Register
                        </Link>
                        <Link to="/login" className="auth-btn">
                            <FaSignInAlt className="icon" /> Login
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
