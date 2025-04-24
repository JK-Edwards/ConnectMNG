import anunu from "../../images/anunu.jpeg";
import React from "react";

import "./BoardMemberGallery.css";

function Profile({person}) {
    return (
      <div className={"profile"}>
        <img
            className={"profileImage"}
            src={person.imageId}
            alt={person.name}
        />
        <h3>
          <a className={"linkedInLink"} href={person.linkedIn} target={"_blank"} rel={"noreferrer"}>{person.name}</a>
        </h3>
        <div>
          {person.position}
        </div>
        <div>
          {person.description}
        </div>
      </div>
    );
};

export default function BoardMemberGallery() {
    return (
      <div className={"galleryContainer"}>
        <div className={"galleryHeader"}>
          <h1>Meet the Board</h1>
        </div>
        <div className={"profileContainer"}>
          <Profile person={{name: "Anuujin Ider",
                            imageId: anunu,
                            position: "President",
                            description: "Desc",
                            linkedIn: "https://www.linkedin.com/in/anuujini/"}} />
          <Profile person={{name: "Saruul-Erdene Ganbayar",
                            imageId: anunu,
                            position: "Vice President",
                            description: "Desc",
                            linkedIn: "https://www.linkedin.com/in/saruul-erdene/"}} />
          <Profile person={{name: "Selenge Ulam-Urnukh",
                            imageId: anunu,
                            position: "Program Director",
                            description: "Desc",
                            linkedIn: "https://www.linkedin.com/in/selengeuo/"}} />
          <Profile person={{name: "Badmaarag Batjargal",
                            imageId: anunu,
                            position: "Marketing Director",
                            description: "Desc",
                            linkedIn: "https://www.linkedin.com/in/badmaarag-batjargal-72a747174/"}} />
          <Profile person={{name: "Nomundelger Amarbat",
                            imageId: anunu,
                            position: "Program Director",
                            description: "Desc",
                            linkedIn: "https://www.linkedin.com/in/anomuka/"}} />
          <Profile person={{name: "James Kitticha Edwards",
                            imageId: anunu,
                            position: "Web Developer",
                            description: "Desc",
                            linkedIn: "https://www.linkedin.com/in/jkedwards8/"}} />
        </div>
      </div>
    );
};