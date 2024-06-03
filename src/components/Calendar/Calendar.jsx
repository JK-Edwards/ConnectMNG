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
            <div className={'eventDayTitleContainer'}>
                <div className={"eventDayTitle"}>
                    Time
                </div>
                <div className={"eventDayTitle"}>
                    Event
                </div>
                <div className={"eventDayTitle"}>
                    Location
                </div>
            </div>
            <div className={"eventTable"}>
                <div className={"columnContainer"}>
                    {events.map((event, index) =>
                        <div className={"eventDayContentContainer"} key={index}>{event.time}</div>
                    )}
                </div>
                <div className={"columnContainer"}>
                    {events.map((event, index) =>
                        <div className={"eventDayContentContainer"} key={index}>{event.event}</div>
                    )}
                </div>
                <div className={"columnContainer"}>
                    {events.map((event, index) =>
                        <div className={"eventDayContentContainer"} key={index}>{event.location}</div>
                    )}
                </div>
            </div>
        </div>
    );
};
