import React from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import "./Resumehelp.css"; // Create a CSS file for styling

export default function ResumeHelp() {
    const intl = useIntl();
    const navigate = useNavigate(); // Enables navigation back to the event list

    return (
        <div className="event-details-container">
            <h1>Resume Help Workshop</h1>
            <p className="event-date">{intl.formatMessage({ id: "resume_date_time" })}</p>
            <p className="event-location">{intl.formatMessage({ id: "resume_location" })}</p>

            <div className="event-description">
                <p>
                    {intl.formatMessage({ id: "resume_desc1" })}
                </p>
                <p>
                    {intl.formatMessage({ id: "resume_desc2" })}
                </p>
                <p>{intl.formatMessage({ id: "resume_desc3" })}</p>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>{intl.formatMessage({ id: "r_back_to_events" })}</button>
        </div>
    );
}