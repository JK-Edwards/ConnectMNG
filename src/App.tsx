import OurTeam from "./pages/About/OurTeam/OurTeam";
import OurStory from "./pages/About/OurStory/OurStory";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import CulturalCompassProgram from "./pages/Programs/ProgramPages/CulturalCompass/CulturalCompass";
import Donate from "./pages/Donate/Donate";
import Events from "./pages/Events/Events";
import ResumeHelp from "./pages/Events/EventsPages/ResumeHelp/Resumehelp";
import HappyHour from "./pages/Events/EventsPages/HappyHour/HappyHour";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Internships from "./pages/Internships/Internships";
import MentorshipProgram from "./pages/Programs/ProgramPages/Mentorship/Mentorship";
import Navigation from "./components/Navigation/Navigation";
import Podcasts from "./pages/Podcasts/Podcasts";
import Programs from "./pages/Programs/Programs";
import React from "react";
import Resources from "./pages/Resources/Resources";
import ResumeBlog from "./pages/Blogs/IndividualBlogs/ResumeBlog/ResumeBlog";
import ResumeBoostProgram from "./pages/Programs/ProgramPages/ResumeBoost/ResumeBoost";
import SupportPopup from "./components/SupportPopup/SupportPopup";
import translations from "./translations";
import Volunteer from "./pages/Volunteer/Volunteer";
import NewFeature from "./pages/NewFeatures/NewFeatures";
import Workshops from "./pages/Blogs/Workshops";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { useState } from "react";

import "./App.css";

export default function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className={"app"}>
      <IntlProvider locale={isEnglish ? "en" : "mn"} messages={translations[isEnglish ? "en" : "mn"]}>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <div className={"pinnedHeader"}>
            <Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <Navigation />
          </div>
          <div className={"pageContainer"}>
            <Routes>
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/cultural-compass-program" element={<CulturalCompassProgram />} />
              <Route path="/programs/mentorship-program" element={<MentorshipProgram />} />
              <Route path="/programs/resume-boost-program" element={<ResumeBoostProgram />} />
              <Route path="/get-involved/volunteer" element={<Volunteer />} />
              <Route path="/get-involved/internships" element={<Internships />} />
              <Route path="/resources/podcasts" element={<Podcasts />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/resume-help" element={<ResumeHelp />} />
              <Route path="/events/happy-hour" element={<HappyHour />} />
              <Route path="/resources/blogs" element={<Blogs />} />
              <Route path="/resources/blogs/resume-blog" element={<ResumeBlog />} />
              <Route path="/about-us/our-team" element={<OurTeam />} />
              <Route path="/about-us/our-story" element={<OurStory />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/get-involved/donate" element={<Donate />} />
              <Route path="/resources/blogs" element={<Blogs />} />
              <Route path="/resources/blogs/welcome-blog" element={<Workshops />} />
              <Route path="*" element={<Home />} />
              <Route path="/new-feature" element={<NewFeature />} />
            </Routes>
          </div>
          <div className={"pinnedSupportPopup"}>
            <SupportPopup />
          </div>
          <Footer />
        </Router>
      </IntlProvider>
    </div>
  );
}