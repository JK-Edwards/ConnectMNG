import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

export default function Events() {
    const events = [
        {
            date: "Monday 29th January 2024",
            sessions: [
                { time: "3pm", name: "Resume help", location: "Capital One Cafe", link: "/events/resume-help" },
                { time: "4pm", name: "Happy hour", location: "Bangrak", link: "/events/happy-hour" },
            ],
        },
        
    ];

    return (
        <div className="eventsContainer">
            <h1>Calendar</h1>

            {events.map((event, index) => (
                <div key={index} className="event-section">
                    <h2 className="event-header">{event.date}</h2>
                    <table className="event-table">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Event</th>
                                <th>Location</th>
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