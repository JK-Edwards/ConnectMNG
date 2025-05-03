import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import React from "react";

import { useIntl } from "react-intl";

import "./OurTeam.css";

export default function OurTeam() {
	const intl = useIntl();


	return (
        <div className={"aboutContainer"}>
    
          {/* <div className={"ourStoryAboutUs"}>
            <h2>{intl.formatMessage({ id: "aboutUsTitle" })}</h2>
            <p>{intl.formatMessage({ id: "aboutUsDesc" })}</p>
          </div>
    
          <div className={"ourStoryValues"}>
            <h2>{intl.formatMessage({ id: "ourValuesTitle" })}</h2>
            <p>{intl.formatMessage({ id: "ourValuesDesc" })}</p>
          </div> */}
		  <BoardMemberGallery/>
        </div>
      );
};