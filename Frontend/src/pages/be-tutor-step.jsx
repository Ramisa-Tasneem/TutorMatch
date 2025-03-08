import { useState } from "react";
import "../tutor.css"; 
import Navbar from "../components/navbar";

const BeTutorStep = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        tuition_district: "",
        preferred_tuition_area: "",
        your_location: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Form submission logic (API call or local storage)
    };

    return (
        <>
            <Navbar />  
            <div className="tutor-container">
                {/* Left Side Image */}
                <div className="tutor-image">
                    <img src="/images/be tutor.jpg" alt="Tutor Signup" />
                </div>

                {/* Right Side Form */}
                <div className="form-content">
                    <h2>Become a Tutor</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                            <select name="gender" required onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                            <input type="text" name="tuition_district" placeholder="Tuition District" required onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <textarea name="preferred_tuition_area" placeholder="Preferred Tuition Area" required onChange={handleChange}></textarea>
                        </div>
                        <input type="text" name="your_location" placeholder="Your Location" required onChange={handleChange} />
                        
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BeTutorStep;
