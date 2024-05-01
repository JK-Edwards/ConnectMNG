import welcomeBlogThumbnail from "../../images/blogs/welcomeBlog/welcomeBlogThumbnail.jpg";
import resumeBlogThumbnail from "../../images/blogs/resumeBlog/resumeBlogThumbnail.jpg";
import ItemCarousel from "../../components/Carousel/ItemCarousel.jsx";
import StyledLink from "../../components/StyledLink/StyledLink";
import prog1 from "../../images/programs/prog1.png";
import prog2 from "../../images/programs/prog2.png";
import prog3 from "../../images/programs/prog3.png";
import React from "react";
import slide1 from "../../images/homeCarousel/slide1.jpg";
import slide2 from "../../images/homeCarousel/slide2.jpg";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";


import "./Home.css";

export default function Home() {
	const intl = useIntl();

	const blogSlides = [
		<Link to={"/resources/blogs/resume-blog"}>
			<div className={"carouselSlide"}>
				<img src={slide1} height={425} width={850} alt={"Slide 1"} />
			</div>
		</Link>
		,
		<div className={"carouselSlide"}>
			<img src={slide2} height={425} width={850} alt={"Slide 2"} />
		</div>,
	  ];

	return (
		<div className={"homeContainer"}>
			<div className={"carouselContainer"}>
				<ItemCarousel slides={blogSlides} interval={2500}/>
			</div>
			<div className={"missionTextContainer"}>
				<h1>{intl.formatMessage({id: "missionAndImpact"}).toUpperCase()}</h1>
				<p>{intl.formatMessage({id: "mission"})}</p>
			</div>
			<div className={"programGalleryContainer"}>
				<h1>{intl.formatMessage({id: "What We Offer"}).toUpperCase()}</h1>
				<div className={"programGallery"}>
					<div className="program">
						<img className={"programImage"} src={prog1} alt={"Career Development Program"}></img>
						<h3>{intl.formatMessage({id: "careerDevelopment"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs"}/>
					</div>
					<div className="program">
						<img className={"programImage"} src={prog2} alt={"Mentorship Program"}></img>
						<h3>{intl.formatMessage({id: "programs"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/programs"}/>
					</div>
					<div className="program">
						<img className={"programImage"} src={prog3} alt={"Events"}></img>
						<h3>{intl.formatMessage({id: "events"})}</h3>
						<StyledLink text={intl.formatMessage({id: "learnMore"})} link={"/events"}/>
					</div>
				</div>
			</div>
		</div>
	);
};