import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import "./Events.css";

export default function Events() {
    const intl = useIntl();
    const events = [
        {
            date: intl.formatMessage({ id: "date" }),
            sessions: [
                { time: intl.formatMessage({ id: "time" }), name: "Resume help", location: "Capital One Cafe", link: "/events/resume-help" },
                { time: intl.formatMessage({ id: "time1" }), name: "Happy hour", location: "Bangrak", link: "/events/happy-hour" },
            ],
        },

    ];

    return (
        <div className="eventsContainer">
            <h1> {intl.formatMessage({ id: "Calendar" })}</h1>

            {events.map((event, index) => (
                <div key={index} className="event-section">
                    <h2 className="event-header">{event.date}</h2>
                    <table className="event-table">
                        <thead>
                            <tr>
                                <th>{intl.formatMessage({ id: "Time" })}</th>
                                <th>{intl.formatMessage({ id: "Event" })}</th>
                                <th>{intl.formatMessage({ id: "Location" })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {event.sessions.map((session, i) => (
                                <tr key={i}>
                                    <td>{session.time}</td>
                                    <td>
                                        <Link to={session.link} className="event-link">
                                            {session.name}
                                        </Link>
                                    </td>
                                    <td>{session.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}