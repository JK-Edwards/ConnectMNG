import React from "react";

import { useIntl } from "react-intl";
import StyledFormLink from "../../components/StyledFormLink/StyledFormLink";
import websiteImage from "../../images/volunteer/Website.jpg"
import homeIcon from "../../images/homeIcon.png"

import "./Internships.css";
import { VolunteerCard, VolunteerCardMobile } from "../Volunteer/Card.jsx";

export default function Internships() {
	const intl = useIntl();

	return (
		<div className={"internshipsContainer"}>
			<div className={"internshipsGetInvolved only-mobile"}>
				<img className={"homeIcon"} src={homeIcon} alt="Home icon"/>
				<h1>&nbsp;/&nbsp;Get involved</h1>
			</div>
			<div className={'internshipsTitleContainer'}>
				<h1>{intl.formatMessage({id: "internships"})}</h1>
			</div>
			<div className={'internshipsDescriptionContainer'}>
				<p>Body copy for encouraging people/professionals to apply for internships</p>
			</div>

			<div className="thinSeparator only-mobile"></div>

			<div className={'volunteerCardContainer only-desktop'}>
 				<VolunteerCard flip={true} title={"Website"} desc={"Help us with our website..."} link={websiteImage}/>
 			</div>

			 <div className={'volunteerCardContainerMobile only-mobile'}>
				 <VolunteerCardMobile flip={true} title={"Website"} desc={"Help us with our website..."} link={websiteImage}/>
				 <div className="thinSeparator only-mobile"></div>
				 <VolunteerCardMobile flip={true} title={"Program"} desc={"Inten role description and responsibilities"} link={websiteImage}/>
 			</div>

			<div className="thinSeparator only-mobile"></div>

			<div className={'internshipsFormTitleContainer'}>
				Small paragraph about the internship process
			</div>
			<div className={'internshipsFormContainer'}>
				<StyledFormLink text={'Become an intern!'}/>
			</div>
		</div>
	);
};