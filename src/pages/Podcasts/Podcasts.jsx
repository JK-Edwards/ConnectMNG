import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import React from "react";

import { useIntl } from "react-intl";

import "./Podcasts.css";

function PodcastCard ({image, title, desc, link}) {
	const intl = useIntl();

	return (
		<div className={"podcastCardContainer"}>
			<img className={"podcastThumbnail"} src={image} alt={title}/>
			<div className={"podcastCardTextContainer"}>
				<h3>{title}</h3>
				<p>{desc}</p>
				<StyledLink text={intl.formatMessage({id: "learnMore"})} link={link} />
			</div>
		</div>
	);
}

export default function Blogs() {
	const intl = useIntl();

	return (
		<div className={"podcastContainer"}>
			<h1>{intl.formatMessage({id: "Podcasts"})}</h1>
			<PodcastCard image={''}
						title={"Connect MNG - Where Your Journey is Our Journey"}
						desc={"desc"}
						link={""}/>
			<PodcastCard image={''}
						title={"All the basics you need to know about resume"}
						desc={"desc2"}
						link={""}/>
		</div>
	);
};