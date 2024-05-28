import StyledLink from "../../components/StyledLink/StyledLink";
import ContactUsBox from "../../components/ContactUsBox/ContactUsBox";
import React from "react";
import {
	MENTORSHIP_PROGRAM_DESC,
	RESUME_BOOST_PROGRAM_DESC,
	CULTURAL_COMPASS_PROGRAM_DESC
 } from "../../constants";

import { useIntl } from "react-intl";

import "./Programs.css";

function Program({name, description, pageLink}) {
	return (
		<div className={"indivProgramContainer"}>
			<div className={"indivProgramTextContainer"}>
				<div className={'programTitleContainer'}>
					<h1>
						{name}
					</h1>
					<StyledLink text={"Get Started"} link={pageLink} />
				</div>
				<p className={'programDescription'}>
					{description}
				</p>
			</div>
		</div>
	);
}

export default function Programs() {
	const intl = useIntl();

	return (
		<div className={"programsContainer"}>
			<div>
				<div className={"programsHeader"}>
					<h1>
						Our Programs
					</h1>
					<p>
						Description
					</p>
				</div>
				<Program name={"Cultural Compass"} description={CULTURAL_COMPASS_PROGRAM_DESC} pageLink={"/programs/cultural-compass-program"}/>
				<Program name={"Mentorship"} description={MENTORSHIP_PROGRAM_DESC} pageLink={"/programs/mentorship-program"} />
				<Program name={"Resume Boost"} description={RESUME_BOOST_PROGRAM_DESC} pageLink={"/programs/resume-boost-program"} />
			</div>
			<div className={"contactUsBoxContainer"}>
				<ContactUsBox />
			</div>
		</div>
	);
};