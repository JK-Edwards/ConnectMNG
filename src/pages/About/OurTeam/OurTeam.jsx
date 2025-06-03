import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import React from "react";

import { useIntl } from "react-intl";

import "./OurTeam.css";

export default function OurTeam() {
  const intl = useIntl();

  return (
    <div className={"aboutContainer"}>
      <div className={"aboutHeader"}>
        <h1>
          {intl.formatMessage({ id: "aboutUs" })}
        </h1>
        <div>
          {intl.formatMessage({ id: "aboutUsDesc" })}
        </div>
      </div >
      <div className={"aboutHeader"}>
        <h1>
          {intl.formatMessage({ id: "ourValues" })}
        </h1>
        <div>{intl.formatMessage({ id: "ourValuesDesc" })}</div>
      </div>
      <BoardMemberGallery />
    </div>
  );
};