import React from "react";

import "./Calendar.css";

export default function Calendar({events}) {
    return (
        <div className={"calendarContainer"}>
            {events.map((event, index) =>
                <EventDay key={index}
                            date={event.date}
                            events={event.events} />
            )}
        </div>
    );
};

function EventDay({date, events}) {
    return (
        <div className={"eventDayContainer"}>
            <h1>{date}</h1>
            <div className={"eventTable"}>
                <div className={"columnContainer"}>
                    <div className={"eventDayTitleContainer"}>
                        <h3>Time</h3>
                    </div>
                    {events.map((event, index) =>
                        <p key={index}>{event.time}</p>
                    )}
                </div>
                <div className={"columnContainer"}>
                    <div className={"eventDayTitleContainer"}>
                        <h3>Event</h3>
                    </div>
                    {events.map((event, index) =>
                        <p key={index}>{event.event}</p>
                    )}
                </div>
                <div className={"columnContainer"}>
                    <div className={"eventDayTitleContainer"}>
                        <h3>Location</h3>
                    </div>
                    {events.map((event, index) =>
                        <p key={index}>{event.location}</p>
                    )}
                </div>
            </div>
        </div>
    );
};