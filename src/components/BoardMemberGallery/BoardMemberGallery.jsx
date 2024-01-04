import anunu from "../../images/anunu.jpeg";
import React from "react";

import "./BoardMemberGallery.css";

function Profile({person, size}) {
    return (
      <div className={"profile"}>
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
        <a className={"linkedInLink"} href={person.linkedIn} target={"_blank"} rel={"noreferrer"}>LinkedIn</a>
      </div>
    );
};

export default function BoardMemberGallery() {
    return (
      <div>
        <h1>Board of Directors</h1>
        <div className={"profileContainer"}>
          <Profile person={{name: "Anuujin Ider",
                            imageId: anunu,
                            description: "President",
                            linkedIn: "https://www.linkedin.com/in/anuujini/"}}
                   size={150}/>
          <Profile person={{name: "Saruul-Erdene Ganbayar",
                            imageId: anunu,
                            description: "Vice President",
                            linkedIn: "https://www.linkedin.com/in/saruul-erdene/"}}
                    size={150}/>
          <Profile person={{name: "Selenge Ulam-Urnukh",
                            imageId: anunu,
                            description: "Program Director",
                            linkedIn: "https://www.linkedin.com/in/selengeuo/"}}
                   size={150}/>
          <Profile person={{name: "Badmaarag Batjargal",
                            imageId: anunu,
                            description: "Marketing Director",
                            linkedIn: "https://www.linkedin.com/in/badmaarag-batjargal-72a747174/"}}
                   size={150}/>
          <Profile person={{name: "Nomundelger Amarbat",
                            imageId: anunu,
                            description: "Program Director",
                            linkedIn: "https://www.linkedin.com/in/anomuka/"}}
                   size={150}/>
          <Profile person={{name: "Khureltulga Tsolmon",
                            imageId: anunu,
                            description: "Professional Development Director",
                            linkedIn: "https://www.linkedin.com/in/at3/"}}
                   size={150}/>
          <Profile person={{name: "James Kitticha Edwards",
                            imageId: anunu,
                            description: "Website Dude",
                            linkedIn: "https://www.linkedin.com/in/jkedwards8/"}}
                   size={150}/>
        </div>
      </div>
    );
};