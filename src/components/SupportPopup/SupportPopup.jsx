import arrow from "../../images/supportPopup/popupArrow.png";
import donateArrow from "../../images/supportPopup/donateArrow.png";
import hand from "../../images/supportPopup/supportPopupImage.png";
import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

import "./SupportPopup.css";

export default function SupportPopup() {
    const [isOpen, setIsOpen] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const text = "Your contribution will help to inspire, educate, and equip Mongolian students with skills to navigate through today's world."
               + " and give back to the communnity.";

    return (
        <div className={"supportPopupContainer"}>
            <button className={"supportPopupButton"} onClick={togglePopup}>
                {isOpen ? (
                    <img className={"supportPopupButtonImage"} src={arrow} alt="Close support popup button" />
                ) : (
                    <img className={"supportPopupButtonImage closed"} src={arrow} alt="Open support popup button" />
                )}
            </button>
            <div className={"supportPopupTextContainer" + (!isOpen ? " closed" : "")}>
                <div className={"supportPopupTextTitleContainer"}>
                    <img className={"supportPopupImage"} src={hand} alt={"Helping Hand"}/>
                    <h3>
                        Support Connect MNG!
                    </h3>
                </div>
                <p>{text}</p>
                <Link className={"supportPopupDonateLink"} to="/donate">
                    <p>
                        Donate
                    </p>
                    <img className={"supportPopupDonateLinkArrow"} src={donateArrow} alt={"Donation link arrow"}/>
                </Link>
            </div>
        </div>
    );
};