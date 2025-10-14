import StyledLink from "../../components/StyledLink/StyledLink";
import ContactUsBox from "../../components/ContactUsBox/ContactUsBox";
import React from "react";
import homeIcon from "../../images/programs/homeIcon.png";

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
	const icon = homeIcon;

	return (
		<div className={"programsContainer"}>
			<div>

				<div className={"homeIconAndPrograms"}>
					<a href="http://connectmng.org/" rel={"noreferrer"} style={{ display: "inline" }}>
						<img src={icon} className={"icon mobile-only"} alt={"Home"} />
					</a>
					{<h2 className={'programs-header mobile-only'}>{intl.formatMessage({ id: "/ Programs" })}  </h2>}
				</div>

				<div className={"programsHeader"}>
					<div>
						<h1>{intl.formatMessage({ id: "ourProgramsTitle" })}</h1>
						<p>{intl.formatMessage({ id: "ourProgramsDesc" })}</p>
					</div>
				</div>
				<Program name={"Resume Boost"} description={intl.formatMessage({ id: "resumeBoostDesc" })} pageLink={"/programs/resume-boost-program"} />
				<Program name={"Workshop"} description={intl.formatMessage({ id: "workshopDesc" })} pageLink={"/programs/cultural-compass-program"} />
			</div>
			{/* <div className={"contactUsBoxContainer"}>
				<ContactUsBox />
			</div> */}
		</div>
	);
};