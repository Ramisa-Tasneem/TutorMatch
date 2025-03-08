import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Pusher from "pusher-js";
import "/src/TuitionDetails.css";

const TuitionDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tuition, setTuition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [receiverId, setReceiverId] = useState(null);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/post-tuitions/${id}`)
            .then((response) => {
                setTuition(response.data);
                setReceiverId(response.data.userId);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching tuition details");
                setLoading(false);
                console.error(err);
            });

        if (receiverId) {
            const pusher = new Pusher("bc0f4d0a8cf3cfc5c464", { cluster: "mt1" });
            const channel = pusher.subscribe(`chat-channel.${receiverId}`);

            channel.bind("message-sent", function (data) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: data.sender, message: data.message },
                ]);
            });

            return () => {
                pusher.unsubscribe(`chat-channel.${receiverId}`);
            };
        }
    }, [id, receiverId]);

    useEffect(() => {
        if (receiverId) {
            axios
                .get("http://localhost:8000/api/receive-messages", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((response) => {
                    setMessages(response.data.messages);
                })
                .catch((error) => console.error("Error loading messages:", error));
        }
    }, [receiverId]);

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/67cc080f80259c1905bfab7a/1ilqfv080";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);

        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_API.onLoad = function () {
            window.Tawk_API.setAttributes(
                {
                    name: tuition ? tuition.ParentName : "Guest",
                    email: tuition ? tuition.ParentEmail : "",
                    page: `Tuition ID: ${id}`,
                },
                function (error) {
                    if (error) console.error("Tawk.to error:", error);
                }
            );
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [id, tuition]);

    const handleMessageSend = async () => {
        if (message.trim() !== "") {
            try {
                await axios.post(
                    "http://localhost:8000/api/send-message",
                    { message, receiver_id: receiverId },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                setMessage("");
            } catch (error) {
                console.error("Error sending message", error);
            }
        }
    };

    if (loading) return <p>Loading details...</p>;
    if (error) return <p>{error}</p>;
    if (!tuition) return <p>No tuition post found.</p>;

    return (
        <div className="tuition-details-container">
            <h2>{tuition.Subject} Tuition Details</h2>
            <div className="details-card">
                <p><strong>Student Name:</strong> {tuition.StudentName}</p>
                <p><strong>Parent Name:</strong> {tuition.ParentName}</p>
                <p><strong>Email:</strong> {tuition.ParentEmail}</p>
                <p><strong>Class:</strong> {tuition.Class}</p>
                <p><strong>Subject:</strong> {tuition.Subject}</p>
                <p><strong>City:</strong> {tuition.City}</p>
                <p><strong>Area:</strong> {tuition.Area}</p>
                <p><strong>Time:</strong> {tuition.Time}</p>
                <p><strong>Salary:</strong> {tuition.Salary}</p>
                <p><strong>Description:</strong> {tuition.ShortTuitionDescription || "N/A"}</p>
                <p><strong>Preferred Medium:</strong> {tuition.PreferredMedium || "N/A"}</p>
                <p><strong>Experience:</strong> {tuition.Experience || "N/A"}</p>
                <p><strong>Type:</strong> {tuition.Type || "N/A"}</p>
                <p><strong>If you want to contact them.Chat With US!</strong></p>
            </div>

            <div className="chat-container">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
                            <strong>{msg.sender.name}:</strong> {msg.message}
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleMessageSend}>Send</button>
                </div>
            </div>

            <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            <button className="back-btn" onClick={() => navigate(-1)}>Apply now</button>
        </div>
    );
};

export default TuitionDetails;

