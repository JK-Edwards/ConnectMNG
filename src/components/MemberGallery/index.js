import React from "react";
import anunu from "../../Images/anunu.jpeg";

const gallery = {
	"display": "flex",
	"justify-content": "space-evenly"
};

const profile = {
  "display": "flex",
  "flex-direction": "column",
  "align-items": "center"
};

function Profile({person, size}) {
    return (
      <div style={profile}>
        <img
            src={person.imageId}
            alt={person.name}
            width={size}
            height={size}
        />
        <h3>
          {person.name}
        </h3>
        <p>
          {person.description}
        </p>
        <a href={person.linkedIn}>LinkedIn</a>
      </div>
    );
}

export default function Gallery() {
    return (
      <div>
        <h1>Board of Directors</h1>
        <div style={gallery}>
          <Profile person={{name: "Anuujin Ider",
                            imageId: anunu,
                            description: "Description",
                            linkedIn: "https://www.linkedin.com/in/anuujini/"}}
                   size={200}/>
          <Profile person={{name: "Saruul-Erdene Ganbayar",
                   imageId: anunu,
                   description: "Description",
                   linkedIn: "https://www.linkedin.com/in/saruul-erdene/"}}
                   size={200}/>
          <Profile person={{name: "Selenge Ulam-Urnukh",
                   imageId: anunu,
                   description: "Description",
                   linkedIn: "https://www.linkedin.com/in/selengeuo/"}}
                   size={200}/>
        </div>
      </div>
    );
}