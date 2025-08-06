import React from "react";
import { useIntl } from "react-intl";
import StyledLink from "../../components/StyledLink/StyledLink";
import "./Podcasts.css";

interface PodcastCardProps {
	image: string;
	title: string;
	desc: string;
	link: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ image, title, desc, link }) => {
	const intl = useIntl();

	return (
		<div className={"podcastCardContainer"}>
			<img className={"podcastThumbnail"} src={image} alt={title} />
			<div className={"podcastCardTextContainer"}>
				<h3>{title}</h3>
				<p>{desc}</p>
				<StyledLink text={intl.formatMessage({ id: "learnMore" })} link={link} />
			</div>
		</div>
	);
};

const Podcasts: React.FC = () => {
	const intl = useIntl();

	return (
		<div className={"podcastContainer"}>
			<h1>{intl.formatMessage({ id: "podcasts" })}</h1>
			<PodcastCard
				image={""}
				title={"Connect MNG - Where Your Journey is Our Journey"}
				desc={"desc"}
				link={""}
			/>
			<PodcastCard
				image={""}
				title={"All the basics you need to know about resume"}
				desc={"desc2"}
				link={""}
			/>
		</div>
	);
};

export default Podcasts;
