import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/src/TuitionList.css";

const TuitionList = () => {
    const [tuitions, setTuitions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/post-tuitions")
            .then((response) => {
                setTuitions(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching tuition posts");
                setLoading(false);
                console.error(err);
            });
    }, []);

    if (loading) return <p>Loading tuition posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="tuition-list-container">
            <h2>Tuition Posts</h2>
            <div className="tuition-cards">
                {tuitions.map((tuition) => (
                    <div key={tuition.id} className="tuition-card">
                        <h3>{tuition.Subject}</h3>
                        <p>
                            <strong>Class:</strong> {tuition.Class}
                        </p>
                        <p>
                            <strong>Area:</strong> {tuition.Area}
                        </p>
                        <p>
                            <strong>City:</strong> {tuition.City}
                        </p>
                        <p>
                            <strong>Salary:</strong> {tuition.Salary}
                        </p>
                        <button
                            className="view-details-btn"
                            onClick={() => navigate(`/tuition/${tuition.id}`)}
                        >
                            ViewDetails
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TuitionList;
