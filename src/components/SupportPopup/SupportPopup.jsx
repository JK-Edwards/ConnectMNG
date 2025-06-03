import arrow from "../../images/supportPopup/popupArrow.png";
import donateArrow from "../../images/supportPopup/donateArrow.png";
import hand from "../../images/supportPopup/supportPopupImage.png";
import React from "react";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";

import "./SupportPopup.css";

export default function SupportPopup() {
    const intl = useIntl();
    const [isOpen, setIsOpen] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const text = intl.formatMessage({ id: "yourContributionText" });

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
                    <img className={"supportPopupImage"} src={hand} alt={"Helping Hand"} />
                    <h3>
                        {intl.formatMessage({ id: "supportConnect" })}
                    </h3>
                </div>
                <p>{text}</p>
                <Link className={"supportPopupDonateLink"} to="/get-involved/donate">
                    <p>
                        {intl.formatMessage({ id: "donate" })}
                    </p>
                    <img className={"supportPopupDonateLinkArrow"} src={donateArrow} alt={"Donation link arrow"} />
                </Link>
            </div>
        </div>
    );
};