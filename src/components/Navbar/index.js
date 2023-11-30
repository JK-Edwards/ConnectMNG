import React from "react";

import { Nav,
		 NavLink,
		 NavMenu }
from "./NavbarElements";

export default function NavBar() {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/index" activeStyle>
						Home
					</NavLink>
					<NavLink to="/programs" activeStyle>
						Programs & Initiatives
					</NavLink>
					<NavLink to="/volunteer" activeStyle>
						Volunteer
					</NavLink>
					<NavLink to="/donate" activeStyle>
						Donate
					</NavLink>
					<NavLink to="/events" activeStyle>
						Events
					</NavLink>
					<NavLink to="/resources" activeStyle>
						Resources
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/about" activeStyle>
						About Us
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};