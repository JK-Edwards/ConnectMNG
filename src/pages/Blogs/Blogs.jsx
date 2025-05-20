import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import React, { useEffect, useState } from "react";
import myImage from "../../images/blogs/Iconhome.png";

import { useIntl } from "react-intl";

import "./Blogs.css";

// const desc1 = <i>"This blog is more than just a virtual space; it's a cozy coerner where we can come together as Mongolian American college "
// 			+ "students and young professionals, share our stories, and support each other on  this incredible journey..."</i>;

// const desc2 = <i>"As the first impression is always important, your resume is the first impression you can make at the companies when appying "
// 			+ "for a job. According to the Ladders study, on average, recruiters spend 7.4 seconds on the initial screeming of a resume..."</i>;

function BlogCard ({image, title, desc, link}) {
	const intl = useIntl();

	return (
		<div className={"blogCardContainer"}>

			<div className={"blogCardTextContainer"}>
				<h3>{title}</h3>
				<p>{desc}</p>
				<StyledLink text={intl.formatMessage({id: "learnMore"})} link={link} />
			</div>
			<img className={"blogThumbnail"} src={image} alt={title}/>
		</div>
	);
}

export default function Blogs() {
	const intl = useIntl();
	const icon = myImage;

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		// Fetch blogs from backend
		fetch("http://localhost:3000/blogs")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch blogs");
				return res.json();
			})
			.then((data) => {
				setBlogs(data); // Store blog array in state
			})
			.catch((err) => {
				console.error("Error:", err);
			});
	}, []);

	return (
		<div className={"blogContainer"}>

		<div className={"homeIconAndResources"}>
			<a href="http://connectmng.org/" target={"_blank"} rel={"noreferrer"} style={{ display: "inline" }}>
					<img src={icon} className={"icon mobile-only"} alt={"Home"} />
			</a>
			{ <h2 className={'resources-header mobile-only'}>{intl.formatMessage({id: "/ Resources" } )}</h2> }
		</div>
		
			<h1 className={'blogTitleContainer'}>{intl.formatMessage({id: "blogs"})}</h1>
			<div className={'blogCardsContainer'}>
				<BlogCard image={blogs[0]?.thumbnail}
							title={blogs[0]?.title}
							desc={blogs[0]?.content}
							link={"/resources/blogs/welcome-blog"}/>
				<BlogCard image={blogs[1]?.thumbnail}
							title={blogs[1]?.title}
							desc={blogs[1]?.content}
							link={"/resources/blogs/resume-blog"}/>
			</div>
		</div>
	);
};
