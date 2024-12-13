import React from 'react';

interface ContentProps {
  title: string;
  desc: string;
}

const Content: React.FC<ContentProps> = ({ title, desc }) => {
  return (
    <div className="volunteerCardContent">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

interface ImageProps {
  link: string;
}

const Image: React.FC<ImageProps> = ({ link }) => {
  return (
    <div className="volunteerCardImage">
      <img className="volunteerCardImageStyle" src={link} alt="" />
    </div>
  );
};

interface VolunteerCardProps {
  flip: boolean;
  title: string;
  desc: string;
  link: string;
}

export const VolunteerCard: React.FC<VolunteerCardProps> = ({ flip, title, desc, link }) => {
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
