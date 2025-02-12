import React from "react";
import { useNavigate } from "react-router-dom";
import "./HappyHour.css"; // Import the CSS file for styling

export default function HappyHour() {
    const navigate = useNavigate(); // Enables "Back" button functionality

    return (
        <div className="happy-hour-container">
            <h1>Happy Hour Event</h1>
            <p className="event-date">📅 Monday 29th January 2024 | 🕒 4:00 PM</p>
            <p className="event-location">📍 Location: Bangrak</p>

            <div className="event-description">
                <p>
                    Join us for a **fun and relaxing Happy Hour** at Bangrak! 🎉
                </p>
                <p>
                    🥂 Meet new people, network, and unwind with refreshing drinks and great conversations.
                </p>
                <p>📢 This event is open to all members. Bring your friends!</p>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>⬅ Back to Events</button>
        </div>
    );
}