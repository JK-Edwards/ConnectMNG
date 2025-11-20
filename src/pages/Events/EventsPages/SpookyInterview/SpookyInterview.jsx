import React from "react";
import { useNavigate } from "react-router-dom";
import "./SpookyInterview.css";

export default function SpookyInterview() {
    const navigate = useNavigate();

    return (
        <div className="event-details-container">
            <h1>Spooky Interview Workshop</h1>

            <p className="event-date">October 25th, 2025 • 3:45 PM - 5:00 PM</p>
            <p className="event-location">Capital One Cafe SLU</p>

            <div className="event-description">
                <p>
                    Our Spooky Interview Workshop is designed to help students and young professionals strengthen their interview skills in a friendly,
                    confidence-building environment. Whether you're preparing for internships, full-time roles, or just want to practice how you present
                    yourself, this session provides hands-on support and real feedback.
                </p>

                <h3>Agenda</h3>
                <ul>
                    <li>Connect MNG Intro - Interview Do's & Don'ts</li>
                    <li>Present Interview Guidebook by Saruul</li>
                    <li>Mock Interview Practice: “Tell Me About Yourself”</li>
                    <li>1:1 Breakout Coaching (if attendance is low)</li>
                </ul>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>
                Back to Events
            </button>
        </div>
    );
}
