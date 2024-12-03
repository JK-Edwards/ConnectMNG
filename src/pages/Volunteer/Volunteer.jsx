import React from "react";

import { useIntl } from "react-intl";
import { VolunteerCard } from "./utils";
import {
	EVENTS_CARD_TITLE,
	EVENTS_CARD_DESC,
	FUNDRAISING_CARD_TITLE,
	FUNDRAISING_CARD_DESC
} from "../../constants";

import eventsImage from "../../images/volunteer/Events.jpg"
import fundraisingImage from "../../images/volunteer/Fundraising.jpg"

import "./Volunteer.css";
import StyledFormLink from "../../components/StyledFormLink/StyledFormLink";

export default function Volunteer() {
	const intl = useIntl();

	return (
		<div className={"volunteerContainer"}>
			<div className={'volunteerTitleContainer'}>
				<h1>{intl.formatMessage({id: "volunteer"})}</h1>
			</div>
			<div className={'volunteerDescriptionContainer'}>
				<p>{intl.formatMessage({id: "volunteerDesc"})}</p>
			</div>
			<div className={'volunteerCardContainer'}>
				<VolunteerCard flip={true} title={intl.formatMessage({id: "fundraising"})} desc={FUNDRAISING_CARD_DESC} link={fundraisingImage}/>
				<VolunteerCard flip={false} title={intl.formatMessage({id: "events"})} desc={EVENTS_CARD_DESC} link={eventsImage}/>
			</div>
			<div className={'volunteerFormTitleContainer'}>
				Small paragraph about the volunteer process
			</div>
			<div className={'volunteerFormContainer'}>
				<StyledFormLink text={intl.formatMessage({id: "becomeVolunteer"})}/>
			</div>
		</div>
	);
};