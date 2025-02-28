import React from "react";
import { useIntl } from "react-intl";
import resumeBlogThumbnail from "../../images/blogs/resumeBlog/resumeBlogThumbnail.jpg";
import StyledLink from "../../components/StyledLink/StyledLink.tsx";
import welcomeBlogThumbnail from "../../images/blogs/welcomeBlog/welcomeBlogThumbnail.jpg";
import myImage from "../../images/blogs/Iconhome.png";
import "./Blogs.css";

const desc1: React.ReactNode = (
  <i>
    {"This blog is more than just a virtual space; it's a cozy corner where we can come together as Mongolian American college "}
    {"students and young professionals, share our stories, and support each other on this incredible journey..."}
  </i>
);

const desc2: React.ReactNode = (
  <i>
    {"As the first impression is always important, your resume is the first impression you can make at the companies when applying "}
    {"for a job. According to the Ladders study, on average, recruiters spend 7.4 seconds on the initial screening of a resume..."}
  </i>
);

interface BlogCardProps {
  image: string;
  title: string;
  desc: React.ReactNode;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, desc, link }) => {
  const intl = useIntl();

  return (
    <div className="blogCardContainer">
      <div className="blogCardTextContainer">
        <h3>{title}</h3>
        <p>{desc}</p>
        <StyledLink text={intl.formatMessage({ id: "learnMore" })} link={link} />
      </div>
      <img className="blogThumbnail" src={image} alt={title} />
    </div>
  );
};

const Blogs: React.FC = () => {
  const intl = useIntl();
  const icon = myImage;

  return (
    <div className="blogContainer">
      <div className="homeIconAndResources">
        <a href="http://connectmng.org/" target="_blank" rel="noreferrer" style={{ display: "inline" }}>
          <img src={icon} className="icon mobile-only" alt="Home" />
        </a>
        <h2 className="resources-header mobile-only">{intl.formatMessage({ id: "/ Resources" })}</h2>
      </div>

      <h1 className="blogTitleContainer">{intl.formatMessage({ id: "blogs" })}</h1>
      <div className="blogCardsContainer">
        <BlogCard
          image={welcomeBlogThumbnail}
          title="Connect MNG - Where Your Journey is Our Journey"
          desc={desc1}
          link="/resources/blogs/welcome-blog"
        />
        <BlogCard
          image={resumeBlogThumbnail}
          title="All the basics you need to know about resume"
          desc={desc2}
          link="/resources/blogs/resume-blog"
        />
      </div>
    </div>
  );
};

export default Blogs;
