import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import myImage from "../../images/blogs/Iconhome.png";

import "./Blogs.css";

// BlogCard component
function BlogCard({ image, title, desc, link }) {
	const intl = useIntl();

	return (
		<div className="blogCardContainer">
			<div className="blogCardTextContainer">
				<h3>{title}</h3>
				<p>{desc}</p>
				<StyledLink text={intl.formatMessage({ id: "readMore" })} link={link} />
			</div>
			<img className="blogThumbnail" src={image} alt={title} />
		</div>
	);
}

export default function Blogs() {
	const intl = useIntl();
	const [blogs, setBlogs] = useState([]);
	const icon = myImage;

	useEffect(() => {
		async function fetchBlogs() {
			try {
				const res = await fetch("http://localhost:3001/blogs");
				const data = await res.json();
				console.log("API response:", data); // 👈 see what’s coming back
				setBlogs(data.data || []);
			} catch (err) {
				console.error("Error fetching blogs:", err);
			}
		}
		fetchBlogs();
	}, []);


	return (
		<div className="blogContainer">
			<div className="homeIconAndResources">
				<a href="/Home" style={{ display: "inline" }}>
					<img src={icon} className="icon mobile-only" alt="Home" />
				</a>
				<h2 className="resources-header mobile-only">
					{intl.formatMessage({ id: "/ Resources" })}
				</h2>
			</div>

			<h1 className="blogTitleContainer">
				{intl.formatMessage({ id: "blogs" }).toUpperCase()}
			</h1>

			<div className="blogCardsContainer">
				{blogs.map((blog) => (
					<BlogCard
						key={blog.id}
						image={blog.thumbnail} // make sure backend serves static files correctly
						title={blog.title}
						desc={blog.content.substring(0, 120) + "..."} // show preview only
						link={`/resources/blogs/${blog.id}`} // dynamic route
					/>
				))}
			</div>
		</div>
	);
}
