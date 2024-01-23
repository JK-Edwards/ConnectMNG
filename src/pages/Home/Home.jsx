import welcomeBlogThumbnail from "../../images/blogs/welcomeBlog/welcomeBlogThumbnail.jpg";
import resumeBlogThumbnail from "../../images/blogs/resumeBlog/resumeBlogThumbnail.jpg";
import ItemCarousel from "../../components/Carousel/ItemCarousel.jsx";
import StyledLink from "../../components/StyledLink/StyledLink";
import prog1 from "../../images/programs/prog1.png";
import prog2 from "../../images/programs/prog2.png";
import prog3 from "../../images/programs/prog3.png";
import React from "react";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";


import "./Home.css";

export default function Home() {
	const intl = useIntl();

	const blogSlides = [
		<Link to={"/resources/blogs/resume-blog"}>
			<div className={"carouselSlide"}>
				<img src={welcomeBlogThumbnail} height={375} width={375} alt={"Slide 1"} />
			</div>
		</Link>
		,
		<div className={"carouselSlide"}>
			<img src={resumeBlogThumbnail} height={375} width={350} alt={"Slide 2"} />
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/403/300" height={375} alt="Slide 3" />
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/404/300" height={375} alt="Slide 3" />
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/405/300" height={375} alt="Slide 3" />
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/406/300" height={375} alt="Slide 3" />
		</div>
	  ];

	return (
		<div className={"homeContainer"}>
			<div className={"textContainer"}>
				<h1>
					{intl.formatMessage({id: "blogs"})}
				</h1>
			</div>
			<ItemCarousel slides={blogSlides} interval={2500}/>
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
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs"}/>
					</div>
					<div className="program">
						<img className={"programImage"} src={prog2} alt={"Mentorship Program"}></img>
						<h3>{intl.formatMessage({id: "mentorship"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs"}/>
					</div>
					<div className="program">
						<img className={"programImage"} src={prog3} alt={"Networking Program"}></img>
						<h3>{intl.formatMessage({id: "networking"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs"}/>
					</div>
				</div>
			</div>
		</div>
	);
};