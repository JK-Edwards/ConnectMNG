import React from "react";
import "./MentorCard.css";

function MentorCard({ name, title, photo, description, meetingLink }) {
  return (
    <div className="mentorCard">
      <img src={photo} alt={name} />
      <div className="mentorCardText">
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
      <a
        href={meetingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bookMeetingButton"
      >
        Book Meeting
      </a>
    </div>
  );
}

export default MentorCard;