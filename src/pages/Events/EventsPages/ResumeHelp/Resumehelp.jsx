import React from "react";

import { useNavigate } from "react-router-dom";
import "./Resumehelp.css"; // Create a CSS file for styling

export default function ResumeHelp() {
    const navigate = useNavigate(); // Enables navigation back to the event list

    return (
        <div className="event-details-container">
            <h1>Resume Help Workshop</h1>
            <p className="event-date">📅 Monday 29th January 2024 | 🕒 3:00 PM</p>
            <p className="event-location">📍 Location: Capital One Cafe</p>

            <div className="event-description">
                <p>
                    Join us for an interactive **Resume Help Workshop** where industry experts
                    will provide tips on crafting an impressive resume that stands out!
                </p>
                <p>
                    📝 Learn best practices, formatting tips, and how to highlight your skills effectively.
                </p>
                <p>🎯 Ideal for job seekers and students looking to refine their resumes.</p>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>⬅ Back to Events</button>
        </div>
    );
}