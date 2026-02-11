import React from "react";
import "./TimelineCard.desktop.css";
import "./TimelineCard.mobile.css";
export interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

export default function TimelineCard({
  year,
  title,
  description,
  position,
}: TimelineCardProps) {
  return (
    <div className={`timeline-card ${position}`}>
      <span className="timeline-year">{year}</span>
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-description">{description}</p>
    </div>
  );
}