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
			<div className={"volunteerGetInvolved only-mobile"}>
				<h1>/ Get involved</h1>
			</div>
			<div className={'volunteerTitleContainer'}>
				<h1>{intl.formatMessage({id: "volunteer"})}</h1>
			</div>
			<div className={'volunteerDescriptionContainer'}>
				<p>{intl.formatMessage({id: "volunteerDesc"})}</p>
			</div>
			<div className={'volunteerCardContainer only-desktop'}>
				<VolunteerCard flip={true} title={intl.formatMessage({id: "fundraising"})} desc={FUNDRAISING_CARD_DESC} link={fundraisingImage}/>
				<VolunteerCard flip={false} title={intl.formatMessage({id: "events"})} desc={EVENTS_CARD_DESC} link={eventsImage}/>
			</div>

			<div className="thinSeparator only-mobile"></div>

			<div className={'volunteerCardContainer only-mobile'}>
				<div className="volunteerCard">
					<h1>Website</h1>
					<img
						src={fundraisingImage}
						alt="Website"
						className="volunteerCardImageStyle"
					/>
					<p><i>Intern role description and responsibilities</i></p>
					<div className="thinSeparator"></div>
				</div>
			</div>

			<div className={'volunteerCardContainer only-mobile'}>
				<div className="volunteerCard">
					<h1>Program</h1>
					<img
						src={eventsImage}
						alt="Website"
						className="volunteerCardImageStyle"
					/>
					<p><i>Intern role description and responsibilities</i></p>
					<div className="thinSeparator"></div>
				</div>
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