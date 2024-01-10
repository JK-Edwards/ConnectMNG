import blogs from "../../images/blogs.jpeg";
import ItemCarousel from "../../components/Carousel/ItemCarousel.jsx";
import React from "react";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";


import "./Home.css";

export default function Home() {
	const intl = useIntl();

	const blogSlides = [
		<Link to={"/blogs/resume-blog"}>
			<div className={"carouselSlide"}>
				<img src={blogs} height={375} width={375} alt={"Slide 1"} />
			</div>
		</Link>
		,
		<div className={"carouselSlide"}>
			<img src={blogs} height={375} width={350} alt={"Slide 2"} />
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
			<div className={"infoContainer"}>
				<div className={"textContainer"}>
					<h1>
					   {intl.formatMessage({id: "blogs"})}
					</h1>
				</div>
			</div>
			<ItemCarousel slides={blogSlides} interval={2500}/>
		</div>
	);
};