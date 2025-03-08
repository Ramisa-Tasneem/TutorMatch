import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/login-register.css";
import Navbar from "../components/navbar";

const Login = () => {
    const [role, setRole] = useState("tutor");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const loginEndpoint = role === "tutor" ? "login/tutor" : "login";

        try {
            console.log("Sending login data:", { role, ...formData });

            const response = await fetch(`http://127.0.0.1:8000/api/${loginEndpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData }),
            });

            const data = await response.json();
            console.log("Response from backend:", data);

            if (response.ok) {
                alert("Login Successful!");
                localStorage.setItem("authToken", data.access_token);
                localStorage.setItem("userRole", data.role);


                if (data.tutor) {
                    localStorage.setItem("name", data.tutor.name);
                    localStorage.setItem("email", data.tutor.email);
                }

                setError("");
                navigate("/");
            } else {
                setError(data.error || "Login failed. Please check your credentials.");
            }
        } catch (err) {
            setError("A network error occurred, please try again later.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <Navbar />
            <div className="auth-container">
                <div className="auth-image">
                    <img src="/images/login.jpg" alt="Login" />
                </div>
                <div className="auth-form">
                    <h2>LOGIN</h2>

                    <div className="role-selection">
                        <label className={`role-option ${role === "tutor" ? "selected" : ""}`}>
                            <img src="/images/tutorlogo.jpg" alt="Tutor" className="role-icon" />
                            <input
                                type="checkbox"
                                checked={role === "tutor"}
                                onChange={() => handleRoleChange("tutor")}
                            />
                            Tutor
                        </label>

                        <label className={`role-option ${role === "guardian" ? "selected" : ""}`}>
                            <img src="/images/studentlogo.jpg" alt="Guardian" className="role-icon" />
                            <input
                                type="checkbox"
                                checked={role === "guardian"}
                                onChange={() => handleRoleChange("guardian")}
                            />
                            Guardian
                        </label>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

                        <button type="submit">{loading ? "Logging in..." : "Login"}</button>
                    </form>

                    {error && <p className="error-message">{error}</p>}

                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;