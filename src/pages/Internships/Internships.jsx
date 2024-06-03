import React from "react";

import { useIntl } from "react-intl";
import { VolunteerCard } from "../Volunteer/utils";
import websiteImage from "../../images/volunteer/Website.jpg"

import "./Internships.css";

export default function Internships() {
	const intl = useIntl();

	return (
		<div className={"internshipsContainer"}>
			<div className={'internshipsTitleContainer'}>
				<h1>{intl.formatMessage({id: "internships"})}</h1>
			</div>
			<div className={'internshipsDescriptionContainer'}>
				<p>Body copy for encouraging people/professionals to apply for internships</p>
			</div>
			<div className={'internshipsCardContainer'}>
				<VolunteerCard flip={true} title={"Website"} desc={"Help us with our website..."} link={websiteImage}/>
			</div>
		</div>
	);
};