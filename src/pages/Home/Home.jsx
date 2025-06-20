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
import SimpleSlider from "../../components/Carousel/ReactSlickCarousel.jsx";

export default function Home() {
	const intl = useIntl();

	const blogSlides = [
		<Link to={"/resources/blogs"}>
			<div className={"carouselSlide"}>
				<img src={slide1} height={425} width={850} alt={"Slide 1"} />
			</div>
		</Link>,
		<Link to={""}>
			<div className={"carouselSlide"}>
				<img src={slide2} height={425} width={850} alt={"Slide 2"} />
			</div>
		</Link>,
		<Link to={""}>
			<div className={"carouselSlide"}>
				<img src={slide2} height={425} width={850} alt={"Slide 2"} />
			</div>
		</Link>,
	];

	return (
		<div className={"homeContainer"}>
			<div>
				<div className={"missionTextContainer"}>
					<h1>{intl.formatMessage({ id: "missionAndImpact" }).toUpperCase()}</h1>
					<p>{intl.formatMessage({ id: "mission" })}</p>
				</div>
				<div className={"programGalleryContainer"}>
					<h1>{intl.formatMessage({ id: "whatWeOffer" }).toUpperCase()}</h1>
					<div className={"carouselContainer"}>
						<SimpleSlider slides={blogSlides} />
					</div>
					<div className={"programGallery"}>
						<div className="program">
							<img className={"programImage"} src={prog1} alt={"Resources"}></img>
							<h3>{intl.formatMessage({ id: "resources" })}</h3>
							<StyledLink text={intl.formatMessage({ id: "learnMore" })} link={"/resources/blogs"} />
						</div>
						<div className="program">
							<img className={"programImage"} src={prog2} alt={"Programs"}></img>
							<h3>{intl.formatMessage({ id: "programs" })}</h3>
							<StyledLink text={intl.formatMessage({ id: "learnMore" })} link={"/programs"} />
						</div>
						<div className="program">
							<img className={"programImage"} src={prog3} alt={"Events"}></img>
							<h3>{intl.formatMessage({ id: "events" })}</h3>
							<StyledLink text={intl.formatMessage({ id: "learnMore" })} link={"/events"} />
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};