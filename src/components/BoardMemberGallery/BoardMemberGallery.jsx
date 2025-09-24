import anuujin from "../../images/BoardMembers/Anuujin.jpg";
import saruul from "../../images/BoardMembers/Saruul-Erdene.JPEG";
import badmaarag from "../../images/BoardMembers/Badmaarag.JPG";
import james from "../../images/BoardMembers/James.JPG";
import matthew from "../../images/BoardMembers/Matthew.jpg";
import React from "react";
import { useIntl } from "react-intl";

import "./BoardMemberGallery.css";

function Profile({ person }) {
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
  const intl = useIntl();
  return (
    <div className={"galleryContainer"}>
      <div className={"galleryHeader"}>
        <h1>{intl.formatMessage({ id: "meetBoard" })}</h1>
      </div>
      <div className={"profileContainer"}>
        <Profile person={{
          name: "Anuujin Ider",
          imageId: anuujin,
          position: "President",
          description: "",
          linkedIn: "https://www.linkedin.com/in/anuujini/"
        }} />
        <Profile person={{
          name: "Saruul-Erdene Ganbayar",
          imageId: saruul,
          position: "Vice President",
          description: "",
          linkedIn: "https://www.linkedin.com/in/saruul-erdene/"
        }} />
        <Profile person={{
          name: "Badmaarag Batjargal",
          imageId: badmaarag,
          position: "Marketing Director",
          description: "",
          linkedIn: "https://www.linkedin.com/in/badmaarag-batjargal-72a747174/"
        }} />
        <Profile person={{
          name: "James Kitticha Edwards",
          imageId: james,
          position: "Web Developer",
          description: "",
          linkedIn: "https://www.linkedin.com/in/jkedwards8/"
        }} />
        <Profile person={{
          name: "Matthew Balgan",
          imageId: matthew,
          position: "Web Developer",
          description: "",
          linkedIn: "https://www.linkedin.com/in/matthewbalgan/"
        }} />
      </div>
    </div>
  );
};