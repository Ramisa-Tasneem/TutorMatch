import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "/src/TuitionDetails.css";

const TuitionDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tuition, setTuition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/post-tuitions/${id}`)
            .then((response) => {
                setTuition(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching tuition details");
                setLoading(false);
                console.error(err);
            });
    }, [id]);

    if (loading) return <p>Loading details...</p>;
    if (error) return <p>{error}</p>;
    if (!tuition) return <p>No tuition post found.</p>;

    return (
        <div className="tuition-details-container">
            <h2>{tuition.Subject} Tuition Details</h2>
            <div className="details-card">
                <p>
                    <strong>Student Name:</strong> {tuition.StudentName}
                </p>
                <p>
                    <strong>Parent Name:</strong> {tuition.ParentName}
                </p>
                <p>
                    <strong>Email:</strong> {tuition.ParentEmail}
                </p>
                <p>
                    <strong>Phone Number:</strong> {tuition.PhoneNumber}
                </p>
                <p>
                    <strong>Class:</strong> {tuition.Class}
                </p>
                <p>
                    <strong>Subject:</strong> {tuition.Subject}
                </p>
                <p>
                    <strong>City:</strong> {tuition.City}
                </p>
                <p>
                    <strong>Area:</strong> {tuition.Area}
                </p>
                <p>
                    <strong>Time:</strong> {tuition.Time}
                </p>
                <p>
                    <strong>Salary:</strong> {tuition.Salary}
                </p>
                <p>
                    <strong>Description:</strong> {tuition.ShortTuitionDescription || "N/A"}
                </p>
                <p>
                    <strong>Preferred Medium:</strong> {tuition.PreferredMedium || "N/A"}
                </p>
                <p>
                    <strong>Experience:</strong> {tuition.Experience || "N/A"}
                </p>
                <p>
                    <strong>Type:</strong> {tuition.Type || "N/A"}
                </p>
            </div>
            <button
                className="apply-now-btn"
                onClick={() => alert("Apply functionality to be implemented")}
            >
                ApplyNow
            </button>
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
};

export default TuitionDetails;
