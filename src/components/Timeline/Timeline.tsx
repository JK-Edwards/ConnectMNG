import React from "react";
import { useIntl } from "react-intl";
import "./Timeline.desktop.css";
import "./Timeline.mobile.css";
import TimelineCard from "./TimelineCard";
import { timelineItems } from "./constants";

export interface TimelineItem {
  year: string;
  titleId: string;
  descriptionId: string;
  position: "left" | "right";
}

export default function Timeline() {
  const intl = useIntl();

  return (
    <div className="timeline">
      {timelineItems.map((item) => (
        <TimelineCard
          key={item.year}
          year={item.year}
          title={intl.formatMessage({ id: item.titleId })}
          description={intl.formatMessage({ id: item.descriptionId })}
          position={item.position}
        />
      ))}
    </div>
  );
}