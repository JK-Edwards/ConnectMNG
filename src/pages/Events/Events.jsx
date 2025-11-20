import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import "./Events.css";

export default function Events() {
    const intl = useIntl();
    const events = [
        // {
        //     date: intl.formatMessage({ id: "date" }),
        //     sessions: [
        //         { time: intl.formatMessage({ id: "time" }), name: "Resume help", location: "Capital One Cafe", link: "/events/resume-help" },
        //         { time: intl.formatMessage({ id: "time1" }), name: "Happy hour", location: "Bangrak", link: "/events/happy-hour" },
        //     ],
        // },
        {
            date: "September 27th, 2025",
            sessions: [
                { time: "12:00 PM - 2:00 PM", name: "Resume Building", location: "Capital One Cafe SLU", link: "/events/resume-building" },
            ],
        },

        {
            date: "October 25th, 2025",
            sessions: [
                {
                    time: "3:45 PM - 5:00 PM",
                    name: "Spooky Interview Workshop",
                    location: "Capital One Cafe SLU",
                    link: "/events/spooky-interview" // you can update this when you make the page
                },
            ],
        },

        {
            date: "November 29th, 2025",
            sessions: [
                {
                    time: "3:00 PM - 5:00 PM",
                    name: "Gratitude & Career Potluck",
                    location: "TBD",
                    link: "/events/gratitude-potluck" // placeholder until page is made
                },
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