import StyledLink from "../../components/StyledLink/StyledLink";
import prog1 from "../../images/programs/prog1.png";
import prog2 from "../../images/programs/prog2.png";
import prog3 from "../../images/programs/prog3.png";
import React from "react";

import { useIntl } from "react-intl";


import "./Programs.css";

export default function Programs() {
	const intl = useIntl();

	return (
		<div className={"programContainer"}>
			<div className={"missionTextContainer"}>
				<h1>{intl.formatMessage({id: "missionAndImpact"})}</h1>
				<p>{intl.formatMessage({id: "mission"})}</p>
			</div>
			<div className={"programGalleryContainer"}>
				<h1>{intl.formatMessage({id: "programs"})}</h1>
				<div className={"programGallery"}>
					<div className="program">
						<img className={"programImage"} src={prog1} alt={"Career Development Program"}></img>
						<h3>{intl.formatMessage({id: "careerDevelopment"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs/career-development"}/>
					</div>
					<div className="program">
						<img className={"programImage"} src={prog2} alt={"Mentorship Program"}></img>
						<h3>{intl.formatMessage({id: "mentorship"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs/mentorship-program"}/>
					</div>
					<div className="program">
						<img className={"programImage"} src={prog3} alt={"Networking Program"}></img>
						<h3>{intl.formatMessage({id: "networking"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs/networking-program"}/>
					</div>
				</div>
			</div>
		</div>
	);
};