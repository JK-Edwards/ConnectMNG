import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  desc: string;
  link: string;
  flip?: boolean;
}

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>;
};

const Description: React.FC<{ desc: string }> = ({ desc }) => {
  return <p>{desc}</p>;
};

const Content: React.FC<{ title: string; desc: string }> = ({ title, desc }) => {
  return (
    <div className="volunteerCardContent">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

const Image: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className="volunteerCardImage">
      <img className="volunteerCardImageStyle" src={link} alt="filler" />
    </div>
  );
};

export const VolunteerCard: React.FC<CardProps> = ({ title, desc, link, flip = false }) => {
  return flip ? (
    <div className="volunteerCard">
      <Content title={title} desc={desc} />
      <Image link={link} />
    </div>
  ) : (
    <div className="volunteerCard">
      <Image link={link} />
      <Content title={title} desc={desc} />
    </div>
  );
};

export const VolunteerCardMobile: React.FC<CardProps> = ({ title, desc, link }) => {
  return (
    <div className="volunteerCardContentMobile">
      <Title title={title} />
      <Image link={link} />
      <Description desc={desc} />
    </div>
  );
};
