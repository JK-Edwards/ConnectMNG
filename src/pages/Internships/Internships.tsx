import React from "react";
import { useIntl } from "react-intl";
import StyledFormLink from "../../components/StyledFormLink/StyledFormLink";
import websiteImage from "../../images/volunteer/Website.jpg";
import homeIcon from "../../images/homeIcon.png";

import "./Internships.css";
import { VolunteerCard, VolunteerCardMobile } from "../Volunteer/Card";

export default function Internships() {
  const intl = useIntl();

  return (
    <div className={"internshipsContainer"}>
      <div className={"internshipsGetInvolved only-mobile"}>
        <img className={"homeIcon"} src={homeIcon} alt="Home icon" />
        <h1>&nbsp;/&nbsp;Internships</h1>
        <img className={"homeIcon"} src={homeIcon} alt="Home icon" />
        <h1>&nbsp;/&nbsp;Get involved</h1>
      </div>

      <div className={"internshipsTitleContainer"}>
        <h1>{intl.formatMessage({ id: "internships" })}</h1>
      </div>

      <div className={"internshipsDescriptionContainer"}>
        <p>{intl.formatMessage({ id: "internshipsDescription" })}</p>
        <h2>{intl.formatMessage({ id: "internshipsWhyJoin" })}</h2>
        <p>{intl.formatMessage({ id: "internshipsWhyJoinBody" })}</p>
        <h2>{intl.formatMessage({ id: "internshipsAreas" })}</h2>
        <p>{intl.formatMessage({ id: "internshipsList1" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList2" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList3" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList4" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList5" })}</p>
        <h2>{intl.formatMessage({ id: "internshipsHowToJoin" })}</h2>
        <p>{intl.formatMessage({ id: "internshipsStep1" })}</p>
        <p>{intl.formatMessage({ id: "internshipsStep2" })}</p>
        <p>{intl.formatMessage({ id: "internshipsStep3" })}</p>
      </div>

      <div className={"internshipsDescriptionContainer"}>
        <p>{intl.formatMessage({ id: "internshipsDescription" })}</p>
        <h2>{intl.formatMessage({ id: "internshipsWhyJoin" })}</h2>
        <p>{intl.formatMessage({ id: "internshipsWhyJoinBody" })}</p>
        <h2>{intl.formatMessage({ id: "internshipsAreas" })}</h2>
        <p>{intl.formatMessage({ id: "internshipsList1" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList2" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList3" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList4" })}</p>
        <p>{intl.formatMessage({ id: "internshipsList5" })}</p>
        <h2>{intl.formatMessage({ id: "internshipsHowToJoin" })}</h2>
        <p>{intl.formatMessage({ id: "internshipsStep1" })}</p>
        <p>{intl.formatMessage({ id: "internshipsStep2" })}</p>
        <p>{intl.formatMessage({ id: "internshipsStep3" })}</p>
      </div>

      <div className="thinSeparator only-mobile"></div>

      <div className={"volunteerCardContainer only-desktop"}>
        <VolunteerCard
          flip={true}
          title={"Website"}
          desc={"Help us with our website..."}
          link={websiteImage}
        />
      </div>

      <div className={"volunteerCardContainerMobile only-mobile"}>
        <VolunteerCardMobile
          title={"Website"}
          desc={"Help us with our website..."}
          link={websiteImage}
        />
        <div className="thinSeparator only-mobile"></div>
        <VolunteerCardMobile
          title={"Program"}
          desc={"Intern role description and responsibilities"}
          link={websiteImage}
        />
      </div>

      <div className="thinSeparator only-mobile"></div>

      {/* Placeholder for real link */}
      <div className={"internshipsFormContainer"}>
        <StyledFormLink text={"Become an intern!"} link={"#"} />
      </div>
    </div>
  );
}
