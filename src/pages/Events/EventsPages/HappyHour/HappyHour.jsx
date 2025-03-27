import React from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import "./HappyHour.css"; // Import the CSS file for styling

export default function HappyHour() {
    const intl = useIntl();
    const navigate = useNavigate(); // Enables "Back" button functionality

    return (
        <div className="happy-hour-container">
            <h1>Happy Hour Event</h1>
            <p className="event-date">{intl.formatMessage({ id: "date_time" })}</p>
            <p className="event-location">{intl.formatMessage({ id: "happy_location" })}</p>

            <div className="event-description">
                <p>
                    {intl.formatMessage({ id: "happy_desc1" })}
                </p>
                <p>
                    {intl.formatMessage({ id: "happy_desc2" })}
                </p>
                <p>{intl.formatMessage({ id: "happy_desc3" })}</p>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>{intl.formatMessage({ id: "h_back_to_events" })}</button>
        </div>
    );
}