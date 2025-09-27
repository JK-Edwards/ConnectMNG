import React from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import "./ResumeBuilding.css";

export default function ResumeBuilding() {
    const intl = useIntl();
    const navigate = useNavigate();

    return (
        <div className="event-details-container">
            <h1>Resume Building Workshop</h1>
            <p className="event-date">{intl.formatMessage({ id: "resume_building_date_time" })}</p>
            <p className="event-location">{intl.formatMessage({ id: "resume_building_location" })}</p>

            <div className="event-description">
                <p>
                    {intl.formatMessage({ id: "resume_building_desc1" })}
                </p>
                <p>
                    {intl.formatMessage({ id: "resume_building_desc2" })}
                </p>
                <p>{intl.formatMessage({ id: "resume_building_desc3" })}</p>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>{intl.formatMessage({ id: "rb_back_to_events" })}</button>
        </div>
    );
}
