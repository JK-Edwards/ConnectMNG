import resumeBlogThumbnail from "../../images/blogs/resumeBlog/resumeBlogThumbnail.jpg";
import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import welcomeBlogThumbnail from "../../images/blogs/welcomeBlog/welcomeBlogThumbnail.jpg";
import React from "react";

import { useIntl } from "react-intl";

import "./Blogs.css";

const desc1 = "This blog is more than just a virtual space; it's a cozy coerner where we can come together as Mongolian American college "
			+ "students and young professionals, share our stories, and support each other on  this incredible journey...";

const desc2 = "As the first impression is always important, your resume is the first impression you can make at the companies when appying "
			+ "for a job. According to the Ladders study, on average, recruiters spend 7.4 seconds on the initial screeming of a resume...";

function BlogCard ({image, title, desc, link}) {
	const intl = useIntl();

	return (
		<div className={"blogCardContainer"}>
			<img className={"blogThumbnail"} src={image} alt={title}/>
			<div className={"blogCardTextContainer"}>
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
		<div className={"blogContainer"}>
			<h1 className={'blogTitleContainer'}>{intl.formatMessage({id: "blogs"})}</h1>
			<BlogCard image={welcomeBlogThumbnail}
						title={"Connect MNG - Where Your Journey is Our Journey"}
						desc={desc1}
						link={"/resources/blogs/welcome-blog"}/>
			<BlogCard image={resumeBlogThumbnail}
						title={"All the basics you need to know about resume"}
						desc={desc2}
						link={"/resources/blogs/resume-blog"}/>
		</div>
	);
};