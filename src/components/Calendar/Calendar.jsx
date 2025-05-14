import React from "react";
import { useIntl } from "react-intl";

import "./Calendar.css";

export default function Calendar({ events }) {
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

function EventDay({ date, events }) {
    const intl = useIntl();
    return (
        <div className={"eventDayContainer"}>
            <h1>{date}</h1>
            <div className={'eventDayTitleContainer'}>
                <div className={"eventDayTitle"}>
                    {intl.formatMessage({ id: "time" })}
                </div>
                <div className={"eventDayTitle"}>
                    {intl.formatMessage({ id: "event" })}
                </div>
                <div className={"eventDayTitle"}>
                    {intl.formatMessage({ id: "location" })}
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
