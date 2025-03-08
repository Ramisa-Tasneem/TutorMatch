import { useNavigate } from "react-router-dom";
import "../tutor.css"; // Modal styles

const TutorModal = ({ onClose }) => {
    const navigate = useNavigate();

    const handleContinue = () => {
        onClose(); // Close the modal before navigating
        navigate("/tutorpage");
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <p>Want to become a tutor? Click below to proceed.</p>
                <button className="continue-btn" onClick={handleContinue}>
                    Click to Continue
                </button>
                <button className="close-btn" onClick={onClose}>✖</button>
            </div>
        </div>
    );
};

export default TutorModal;
