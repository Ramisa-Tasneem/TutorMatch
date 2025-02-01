import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/logo.png" alt="TutorMatch Logo" />
            </div>
            <div className="buttons">
                <Link to="/" className="nav-btn">Home</Link>
                <Link to="/find-jobs" className="nav-btn">Find Tuition</Link>
                <Link to="/login" className="nav-btn">Login</Link>
                <Link to="/post-job" className="nav-btn">Post a Tuition</Link>
            </div>
        </nav>
    );
};

export default Navbar;