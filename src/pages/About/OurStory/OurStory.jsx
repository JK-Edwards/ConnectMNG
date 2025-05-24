import React from "react";
import { useIntl } from "react-intl";
import "./OurStory.css";

export default function OurStory() {
	const intl = useIntl();

	return (
		<div className="aboutContainer">
			<div className="ourStoryTitleContainer">
				<h1>{intl.formatMessage({ id: "ourStoryHeading" })}</h1>
			</div>

			<div className="ourStoryDesc">
				<h3>{intl.formatMessage({ id: "ourStorySub1" })}</h3>
				<p>{intl.formatMessage({ id: "ourStoryText1" })}</p>

				<h3>{intl.formatMessage({ id: "ourStorySub2" })}</h3>
				<p>{intl.formatMessage({ id: "ourStoryText2" })}</p>

				<h3>{intl.formatMessage({ id: "ourStorySub3" })}</h3>
				<p>{intl.formatMessage({ id: "ourStoryText3" })}</p>

				<h3>{intl.formatMessage({ id: "ourStorySub4" })}</h3>
				<p>{intl.formatMessage({ id: "ourStoryText4a" })}</p>
				<p>{intl.formatMessage({ id: "ourStoryText4b" })}</p>

				<h3>{intl.formatMessage({ id: "ourStorySub5" })}</h3>
				<p>{intl.formatMessage({ id: "ourStoryText5a" })}</p>
				<p>{intl.formatMessage({ id: "ourStoryText5b" })}</p>

				<h3>{intl.formatMessage({ id: "ourStorySub6" })}</h3>
				<p>{intl.formatMessage({ id: "ourStoryText6a" })}</p>
				<p><strong>{intl.formatMessage({ id: "ourStoryText6b" })}</strong></p>
				<p><strong>{intl.formatMessage({ id: "ourStorySignOff" })}</strong></p>
			</div>
		</div>
	);
}