import React, { useState } from "react";
import MentorCard from "../../components/MentorCard/MentorCard";
import AnunuImage from "../../images/anunu.jpeg";
import "./Mentors.css";

const mentors = [
  {
    name: "Anuujin Ider",
    title: "Biochemist",
    photo: AnunuImage,
    description: "Description",
    link: "",
    industry: "non-tech"
  },
  {
    name: "Saruul-Erdene Ganbayar",
    title: "Marketing Manager",
    photo: AnunuImage,
    description: "Description",
    link: "",
    industry: "non-tech"
  },
  {
    name: "Selenge Ulam-Urnukh",
    title: "Program Director",
    photo: AnunuImage,
    description: "Description",
    link: "",
    industry: "non-tech"
  },
  {
    name: "Badmaarag Batjargal",
    title: "Marketing Director",
    photo: AnunuImage,
    description: "Description",
    link: "",
    industry: "tech"
  },
  {
    name: "Nomundelger Amarbat",
    title: "Product Manager",
    photo: AnunuImage,
    description: "Description",
    link: "",
    industry: "non-tech"
  },
  {
    name: "James Kitticha Edwards",
    title: "Web Developer",
    photo: AnunuImage,
    description: "Description",
    link: "",
    industry: "tech"
  }
];

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [industry, setIndustry] = useState("");

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry =
      industry === "" || mentor.industry === industry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="mentorsContainer">
      <div className="mentorsTitleContainer">
        <h1>Meet Our Mentors</h1>
        <div className="filterBar">
          <input
            type="text"
            placeholder="Search by name or title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="">All</option>
            <option value="tech">Tech</option>
            <option value="non-tech">Non-Tech</option>
          </select>
        </div>
      </div>
      <p className="mentorCount">Showing {filteredMentors.length} mentors</p>
      <div className="mentorGrid">
        {filteredMentors.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            title={mentor.title}
            photo={mentor.photo}
            description={mentor.description}
            meetingLink={mentor.link}
          />
        ))}
      </div>
    </div>
  );
}
