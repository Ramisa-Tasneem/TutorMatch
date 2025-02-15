import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log(" Sending login data:", formData);

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (response.ok) {
        console.log(" successful. Token:", data.access_token);
        localStorage.setItem("token", data.access_token);

        alert("Login Successful!");
        navigate("/profile"); // Redirect to profile page
      } else {
        console.error("Error response:", data);
        setError(data.error || "Login failed, please try again.");
      }
    } catch (err) {
      console.error(" Network Error:", err);
      setError("A network error occurred, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
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
    </div>
  );
};

export default Login;