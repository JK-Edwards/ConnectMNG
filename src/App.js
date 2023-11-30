import About from "./pages/about";
import Blogs from "./pages/blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Events from "./pages/events";
import Home from "./pages";
import instaLogo from "./images/insta.avif";
import Navbar from "./components/Navbar";
import Programs from "./pages/programs";
import React from "react";
import Resources from "./pages/resources";
import Volunteer from "./pages/volunteer";

import { footerStyle,
		 mediaIconStyle,
		 headerStyle }
from "./AppStyle.js";

function App() {
	return (
		<div>
			<div style={headerStyle}>
				<a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
					<img src={instaLogo} style={mediaIconStyle} alt={"Instagram"}/>
				</a>
			</div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/index' element={<Home />} />
					<Route path='/programs' element={<Programs />} />
					<Route path='/volunteer' element={<Volunteer />} />
					<Route path='/donate' element={<Donate />} />
					<Route path='/events' element={<Events />} />
					<Route path='/resources' element={<Resources />} />
					<Route path='/blogs' element={<Blogs />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
			<div style={footerStyle}>
				<a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
					<img src={instaLogo} style={mediaIconStyle} alt={"Instagram"}/>
				</a>
			</div>
		</div>
	);
};

export default App;
