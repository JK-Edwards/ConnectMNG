import React from "react";

import { useIntl } from "react-intl";
import { VolunteerCard } from "./utils";
import {
	MENTORSHIP_CARD_TITLE,
	MENTORSHIP_CARD_DESC,
	EVENTS_CARD_TITLE,
	EVENTS_CARD_DESC,
	FUNDRAISING_CARD_TITLE,
	FUNDRAISING_CARD_DESC
} from "../../constants";

import websiteImage from "../../images/volunteer/Website.jpg"
import eventsImage from "../../images/volunteer/Events.jpg"
import fundraisingImage from "../../images/volunteer/Fundraising.jpg"

import "./Volunteer.css";

export default function Volunteer() {
	const intl = useIntl();

	return (
		<div className={"volunteerContainer"}>
			<div className={'volunteerTitleContainer'}>
				<h1>{intl.formatMessage({id: "volunteer"})}</h1>
			</div>
			<div className={'volunteerDescriptionContainer'}>
				<p>Body copy for encouraging people/professionals to volunteer</p>
			</div>
			<div className={'volunteerCardContainer'}>
				<VolunteerCard flip={true} title={FUNDRAISING_CARD_TITLE} desc={FUNDRAISING_CARD_DESC} link={fundraisingImage}/>
				<VolunteerCard flip={false} title={EVENTS_CARD_TITLE} desc={EVENTS_CARD_DESC} link={eventsImage}/>
				<VolunteerCard flip={true} title={"Website"} desc={"Help us with our website..."} link={websiteImage}/>
			</div>
		</div>
	);
};