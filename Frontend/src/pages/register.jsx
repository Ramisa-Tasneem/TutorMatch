import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/login-register.css";
import Navbar from "../components/navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    const requestData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
    };

    try {
      console.log("Sending registration data:", requestData);

      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (response.ok) {
        console.log("✅ Registration successful. Token:", data.token);

        alert("Registration Successful!");
        setError("");
        navigate("/login"); // ✅ Redirect to profile page
      } else {
        console.error("❌ Error response:", data);
        setError(
          data.errors
            ? JSON.stringify(data.errors)
            : "Registration failed, please try again."
        );
      }
    } catch (err) {
      console.error("❌ Network Error:", err);
      setError("A network error occurred, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-image">
          <img src="/images/register.jpg" alt="Register" />
        </div>

        <div className="register-form">
          <h2>REGISTER</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

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

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">Register</button>
          </form>
          {error && <p className="error-message">{error}</p>}

          <p style={{ color: "black" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;