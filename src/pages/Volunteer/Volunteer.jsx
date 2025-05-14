import React from "react";

import { useIntl } from "react-intl";
import {
	EVENTS_CARD_TITLE,
	EVENTS_CARD_DESC,
	FUNDRAISING_CARD_TITLE,
	FUNDRAISING_CARD_DESC
} from "../../constants";

import eventsImage from "../../images/volunteer/Events.jpg"
import fundraisingImage from "../../images/volunteer/Fundraising.jpg"
import homeIcon from "../../images/homeIcon.png"

import "./Volunteer.css";
import { VolunteerCard, VolunteerCardMobile } from "./Card.jsx";
import StyledFormLink from "../../components/StyledFormLink/StyledFormLink";

export default function Volunteer() {
	const intl = useIntl();

	return (
		<div className={"volunteerContainer"}>
			<div className={"volunteerGetInvolved only-mobile"}>
				<img className={"homeIcon"} src={homeIcon} alt="home icon"/>
				<h1>&nbsp;/&nbsp;Volunteer</h1>
			</div>

			<div className={'volunteerDescriptionContainer'}>
				<p>{intl.formatMessage({id: "volunteerDesc"})}</p>

			</div>
			
			<div className={'volunteerTitleContainer'}>
				{/* <h2>{intl.formatMessage({ id: "whyJoinTitle" })}</h2>
					<p>
						{intl.formatMessage({ id: "whyJoinList1" })}<br/>
						{intl.formatMessage({ id: "whyJoinList2" })}<br/>
						{intl.formatMessage({ id: "whyJoinList3" })}<br/>
						{intl.formatMessage({ id: "whyJoinList4" })}<br/>
					</p> */}
				<div className={'volunteerTitleContainer'}>
				<h2>{intl.formatMessage({ id: "whyJoinTitle" })}</h2>
					<p>
						{intl.formatMessage({ id: "whyJoinList1" })}<br/>
						{intl.formatMessage({ id: "whyJoinList2" })}<br/>
						{intl.formatMessage({ id: "whyJoinList3" })}<br/>
						{intl.formatMessage({ id: "whyJoinList4" })}<br/>
					</p>
				</div>

			</div>

			
			<div className={'volunteerTitleContainer'}>
				<h2>{intl.formatMessage({ id: "exploreTitle" })}</h2>
			</div>

			<div className={'volunteerCardContainer only-desktop'}>
				<VolunteerCard flip={true} title={intl.formatMessage({id: "fundraising"})} desc={FUNDRAISING_CARD_DESC} link={fundraisingImage}/>
				<VolunteerCard flip={false} title={intl.formatMessage({id: "events"})} desc={EVENTS_CARD_DESC} link={eventsImage}/>
			</div>

			<div className="thinSeparator only-mobile"></div>

			<div className={'volunteerCardContainerMobile only-mobile'}>
				 <VolunteerCardMobile flip={true} title={"Fundraising"} desc={"Help us with fundrasing..."} link={fundraisingImage}/>
				 <div className="thinSeparator only-mobile"></div>
				 <VolunteerCardMobile flip={true} title={"Events"} desc={"Help us with organizing events..."} link={eventsImage}/>
 			</div>

			 <div className="thinSeparator only-mobile"></div>

			<div className={'volunteerFormTitleContainer'}>
				<h2>{intl.formatMessage({ id: "howToJoinDesc" })}</h2>	
			
			</div>
			<div className={'volunteerFormContainer'}>
				<StyledFormLink text={intl.formatMessage({id: "becomeVolunteer"})}/>
			</div>

		</div>
	);
};