import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages';
import Programs from './pages/programs';
import Volunteer from './pages/volunteer';
import Donate from './pages/donate';
import Events from './pages/events';
import Resources from './pages/resources';
import Blogs from './pages/blogs';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
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
	);
}

export default App;
