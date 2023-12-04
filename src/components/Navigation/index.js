import classNames from "classnames"
import logo from "../../images/logo.png";
import React from "react";

import "./index.css";

export default function Navigation({activeIndex, onClick}) {
	const contactButtonClasses = classNames("button", "contact");

	return (
		<div className={"container"}>
			<img src={logo} alt={"Connect MNG Logo"} className={"logo"} onClick={() => onClick(0)}/>
			<Tab text={"Programs"} className={"button"} isActive={activeIndex === 1} onClick={() => onClick(1)}/>
			<Tab text={"Get Involved"} className={"button"} isActive={activeIndex === 2} onClick={() => onClick(2)} />
			<Tab text={"Blogs"} className={"button"} isActive={activeIndex === 3} onClick={() => onClick(3)} />
			<Tab text={"About Us"} className={"button"} isActive={activeIndex === 4} onClick={() => onClick(4)} />
			<Tab text={"Resources"} className={"button"} isActive={activeIndex === 5} onClick={() => onClick(5)} />
			<Tab text={"Contact Us"} className={contactButtonClasses} isActive={activeIndex === 6} onClick={() => onClick(6)} />
		</div>
	);
};

function Tab({text, isActive, onClick, className}) {
	if (isActive) {
		className = classNames(className, "active");
	}

	return (
		<div onClick={onClick} className={className}>
			{text}
		</div>
	);
};