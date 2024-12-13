import React from "react";
import { useIntl } from "react-intl";
import { useState } from "react";

import "./Donate.css";

interface MoneyButtonProps{
	text: string;
	onClick: () => void;

}

export default function Donate() {
	const intl = useIntl();
	const cashAmounts = ["$10", "$20", "$50", "$100", "$250", "$500"];
	const [donateAmount, updateDonateAmount] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateDonateAmount(event.target.value);
	};

	function handleDonateButtonClick() {
		if (donateAmount !== "") {
			alert("Donations are currently unavailable, please contact us for more information.");
		} else {
			alert("Please enter a valid donation amount");
		}
	}

	return (
		<div className={"donateContainer"}>
			<h1>
				EMPOWER YOUNG MONGOLIAN PROFESSIONALS
			</h1>
			<h2>
				DONATE TO CONNECT MNG
			</h2>
			<h3>
				MAKE A ONE-TIME GIFT
			</h3>
			<div className={"moneyButtonContainer"}>
				{cashAmounts.map((amount, index) =>
					<MoneyButton key={index} text={amount} onClick={() => updateDonateAmount(amount)} />
				)}
			</div>
			<input className={"donateInput"}
				   placeholder={"Custom Amount"}
				   onChange={handleInputChange}
				   value={donateAmount}
			/>
			<button className={"donateButton"} onClick={handleDonateButtonClick}>{intl.formatMessage({id: "donate"})}</button>
		</div>
	);
};

const MoneyButton: React.FC<MoneyButtonProps> = ({text, onClick}) => {
	return (
		<button className={"moneyButton"} onClick={onClick}>
			{text}
		</button>
	);
};