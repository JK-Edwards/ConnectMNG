import anunu from "../../images/anunu.jpeg";
import React from "react";
import "./BoardMemberGallery.css";

interface Person {
  name: string;
  imageId: string;
  position: string;
  description: string;
  linkedIn: string;
}

interface ProfileProps {
  person: Person;
}

const Profile: React.FC<ProfileProps> = ({ person }) => {
  return (
    <div className="profile">
      <img className="profileImage" src={person.imageId} alt={person.name} />
      <h3>
        <a className="linkedInLink" href={person.linkedIn} target="_blank" rel="noreferrer">
          {person.name}
        </a>
      </h3>
      <div>{person.position}</div>
      <div>{person.description}</div>
    </div>
  );
};

const BoardMemberGallery: React.FC = () => {
  const members: Person[] = [
    {
      name: "Anuujin Ider",
      imageId: anunu,
      position: "President",
      description: "Desc",
      linkedIn: "https://www.linkedin.com/in/anuujini/"
    },
    {
      name: "Saruul-Erdene Ganbayar",
      imageId: anunu,
      position: "Vice President",
      description: "Desc",
      linkedIn: "https://www.linkedin.com/in/saruul-erdene/"
    },
    {
      name: "Selenge Ulam-Urnukh",
      imageId: anunu,
      position: "Program Director",
      description: "Desc",
      linkedIn: "https://www.linkedin.com/in/selengeuo/"
    },
    {
      name: "Badmaarag Batjargal",
      imageId: anunu,
      position: "Marketing Director",
      description: "Desc",
      linkedIn: "https://www.linkedin.com/in/badmaarag-batjargal-72a747174/"
    },
    {
      name: "Nomundelger Amarbat",
      imageId: anunu,
      position: "Program Director",
      description: "Desc",
      linkedIn: "https://www.linkedin.com/in/anomuka/"
    },
    {
      name: "James Kitticha Edwards",
      imageId: anunu,
      position: "Web Developer",
      description: "Desc",
      linkedIn: "https://www.linkedin.com/in/jkedwards8/"
    }
  ];

  return (
    <div className="galleryContainer">
      <div className="galleryHeader">
        <h1>About Us</h1>
        <div>desc</div>
      </div>
      <div className="galleryHeader">
        <h1>Our Values</h1>
        <div>desc</div>
      </div>
      <div className="galleryHeader">
        <h1>Meet the Board</h1>
      </div>
      <div className="profileContainer">
        {members.map((member, index) => (
          <Profile key={index} person={member} />
        ))}
      </div>
    </div>
  );
};

export default BoardMemberGallery;
