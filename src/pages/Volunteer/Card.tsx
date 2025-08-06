import React from "react";
import "./Card.css";

export interface VolunteerCardProps {
  title: string;
  desc: React.ReactNode;
  link: string;
  flip?: boolean;
}

export interface VolunteerCardMobileProps {
  title: string;
  desc: string;
  link: string;
}

const Title: React.FC<{ title: string }> = ({ title }) => (
  <h1>{title}</h1>
);

const Description: React.FC<{ desc: string }> = ({ desc }) => (
  <p>{desc}</p>
);

const Content: React.FC<{ title: string; desc: React.ReactNode }> = ({ title, desc }) => (
  <div className="volunteerCardContent">
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
);

const Image: React.FC<{ link: string }> = ({ link }) => (
  <div className="volunteerCardImage">
    <img className="volunteerCardImageStyle" src={link} alt="filler" />
  </div>
);

export const VolunteerCard: React.FC<VolunteerCardProps> = ({ title, desc, link, flip }) => {
  return (
    <div className="volunteerCard">
      {flip ? (
        <>
          <Content title={title} desc={desc} />
          <Image link={link} />
        </>
      ) : (
        <>
          <Image link={link} />
          <Content title={title} desc={desc} />
        </>
      )}
    </div>
  );
};

export const VolunteerCardMobile: React.FC<VolunteerCardMobileProps> = ({ title, desc, link }) => {
  return (
    <div className="volunteerCardContentMobile">
      <Title title={title} />
      <Image link={link} />
      <Description desc={desc} />
    </div>
  );
};
