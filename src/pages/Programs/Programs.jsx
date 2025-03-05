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

function Program({ name, description, pageLink }) {
	const intl = useIntl();
	return (
		<div className={"indivProgramContainer"}>
			<div className={"indivProgramTextContainer"}>
				<div className={'programTitleContainer'}>
					<h1>
						{name}
					</h1>
					<StyledLink text={intl.formatMessage({ id: "getStarted" })} link={pageLink} />
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
						{intl.formatMessage({ id: "ourPrograms" })}
					</h1>
					<p>
						{intl.formatMessage({ id: "ourProgramsDesc" })}
					</p>
				</div>
				<Program name={"Resume Boost"} description={intl.formatMessage({ id: "resumeBoostDesc" })} pageLink={"/programs/resume-boost-program"} />
				<Program name={"Workshop"} description={intl.formatMessage({ id: "workshopDesc" })} pageLink={"/programs/cultural-compass-program"} />
			</div>
			<div className={"contactUsBoxContainer"}>
				<ContactUsBox />
			</div>
		</div>
	);
};