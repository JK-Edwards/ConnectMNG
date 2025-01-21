import React from "react";

import { useIntl } from "react-intl";
import { VolunteerCard } from "../Volunteer/utils";
import StyledFormLink from "../../components/StyledFormLink/StyledFormLink";
import websiteImage from "../../images/volunteer/Website.jpg"

import "./Internships.css";

export default function Internships() {
	const intl = useIntl();

	return (
		<div className={"internshipsContainer"}>
			<div className={"internshipsGetInvolved only-mobile"}>
				<h1>/ Get involved</h1>
			</div>
			<div className={'internshipsTitleContainer'}>
				<h1>{intl.formatMessage({id: "internships"})}</h1>
			</div>
			<div className={'internshipsDescriptionContainer'}>
				<p>Body copy for encouraging people/professionals to apply for internships</p>
			</div>
			<div className={'internshipsCardContainer only-desktop'}>
 				<VolunteerCard flip={true} title={"Website"} desc={"Help us with our website..."} link={websiteImage}/>
 			</div>

			<div className="thinSeparator only-mobile"></div>

			<div className={'internshipsCardContainer only-mobile'}>
				<div className="internshipsCard">
					<h1>Website</h1>
					<img
						src={websiteImage}
						alt="Website"
						className="internshipsCardImageStyle"
					/>
					<p><i>Intern role description and responsibilities</i></p>
					<div className="thinSeparator"></div>
				</div>
			</div>

			<div className={'internshipsCardContainer only-mobile'}>
				<div className="internshipsCard">
					<h1>Program</h1>
					<img
						src={websiteImage}
						alt="Website"
						className="internshipsCardImageStyle"
					/>
					<p><i>Intern role description and responsibilities</i></p>
					<div className="thinSeparator"></div>
				</div>
			</div>

			<div className={'internshipFormTitleContainer'}>
				Small paragraph about the internship process
			</div>
			<div className={'internshipFormContainer'}>
				<StyledFormLink text={'Become an intern!'}/>
			</div>
		</div>
	);
};