import React from "react";

import { useState } from "react";

import "./Donate.css";

export default function Donate() {
	const cashAmounts = ["$10", "$20", "$50", "$100", "$250", "$500"];
	const [donateAmount, updateDonateAmount] = useState("");

	const handleInputChange = (event) => {
		updateDonateAmount(event.target.value);
	};

	function handleDonateButtonClick() {
		if (donateAmount !== "") {
			alert("You have donated: " + donateAmount);
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
			<button className={"donateButton"} onClick={handleDonateButtonClick}>DONATE</button>
		</div>
	);
};

function MoneyButton({text, onClick}) {
	return (
		<button className={"moneyButton"} onClick={onClick}>
			{text}
		</button>
	);
};