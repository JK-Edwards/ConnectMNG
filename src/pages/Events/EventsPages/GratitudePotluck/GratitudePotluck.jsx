import React from "react";
import { useNavigate } from "react-router-dom";
import "./GratitudePotluck.css";

export default function GratitudePotluck() {
    const navigate = useNavigate();

    return (
        <div className="event-details-container">
            <h1>Gratitude & Career Potluck</h1>

            <p className="event-date">November 29th, 2025 • 3:00 PM - 5:00 PM</p>
            <p className="event-location">Location: TBD</p>

            <div className="event-description">
                <p>
                    ConnectMNG welcomes you to our first-ever <strong>Gratitude & Career Potluck</strong>, a warm and community-focused event where 
                    everyone brings something meaningful to contribute—whether it's a skill tip, an internship story, a study strategy, or a lesson learned.
                </p>

                <p>
                    Think of it as a potluck, but instead of only sharing food, we share knowledge, experiences, and gratitude. It's the perfect way to connect 
                    with other Mongolian students and young professionals in Seattle as we reflect on growth and prepare for new opportunities.
                </p>

                <h3>Agenda</h3>
                <ul>
                    <li>Welcome + Intro</li>
                    <li>Skill Sharing Round 1 — “Bring Your Best Tip”</li>
                    <li>Small Group Reflection: What We're Grateful For in 2025</li>
                    <li>Skill Sharing Round 2 / 1:1 Networking</li>
                    <li>Snacks + Community Discussion</li>
                </ul>

                <h3>Notes</h3>
                <ul>
                    <li>Snacks or Potluck Contributions (optional)</li>
                    <li>Bring at least one tip or story to share</li>
                    <li>Photos/Videos: Badmaarag & Anuujin</li>
                </ul>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>
                Back to Events
            </button>
        </div>
    );
}
