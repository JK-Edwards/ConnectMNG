import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import React, { useEffect, useState } from "react";
import myImage from "../../images/blogs/Iconhome.png";

import { useIntl } from "react-intl";

import "./Blogs.css";

function BlogCard({ image, title, desc, link }) {
	const intl = useIntl();

	return (
		<div className={"blogCardContainer"}>

			<div className={"blogCardTextContainer"}>
				<h3>{title}</h3>
				<p>{desc}</p>
				<StyledLink text={intl.formatMessage({ id: "learnMore" })} link={link} />
			</div>
			<img className={"blogThumbnail"} src={image} alt={title} />
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
				{<h2 className={'resources-header mobile-only'}>{intl.formatMessage({ id: "/ Resources" })}</h2>}
			</div>

			<h1 className={'blogTitleContainer'}>{intl.formatMessage({ id: "blogs" })}</h1>
			<div className={'blogCardsContainer'}>
				{blogs.map((blog, index) => (
					<BlogCard
						key={index} // Use a unique key for each blog card
						image={blog.thumbnail}
						title={blog.title}
						desc={blog.content}
						link={`/resources/blogs/${blog.title.replace(/\s+/g, '-').toLowerCase()}`} // Generate a dynamic link
					/>
				))}
			</div>
		</div>
	);
};
