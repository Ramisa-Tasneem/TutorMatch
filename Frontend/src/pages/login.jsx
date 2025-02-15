import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/login-register.css";
import Navbar from "../components/navbar";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        alert("Login Successful!");
    };

    return (
        <>
            <Navbar />
            <div className="register-container">
                <div className="register-image">
                    <img src="/images/login.jpg" alt="Login" />
                </div>

                <div className="register-form">
                    <h2>LOGIN</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Login</button>
                    </form>
                    <p style={{ color: "black" }}>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
