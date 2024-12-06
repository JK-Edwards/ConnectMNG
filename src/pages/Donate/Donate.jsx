import React from "react";

import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import "./Donate.css";

export default function Donate() {
	const intl = useIntl();
	const cashAmounts = ["$10", "$20", "$50", "$100", "$250", "$500"];
	const [donateAmount, updateDonateAmount] = useState("");

	const handleInputChange = (event) => {
		updateDonateAmount(event.target.value);
	};

	useEffect(() => {
        const paypalScript = document.createElement("script");
        paypalScript.src = "https://www.paypal.com/sdk/js?client-id=ATMg6l2UNbTrMPc99AbNMe_eT8PJ2QfJ1lRGzeZPh4wl8BampZl2YutnUid-3xgU57FOZFq1rjZwUIru&currency=USD"; // Replace YOUR_CLIENT_ID
        paypalScript.async = true;
        paypalScript.onload = () => {
            if (window.paypal) {
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
						const sanitizedAmount = donateAmount.replace("$", "");
						if (!sanitizedAmount || isNaN(sanitizedAmount)) {
							alert("Please select a valid donation amount.");
							return;
						}
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										value: sanitizedAmount || "10", // Default to $10 if no amount is selected
									},
								},
							],
						});
					},
                    onApprove: (data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert(`Thank you for your donation, ${details.payer.name.given_name}!`);
                        });
                    },
                }).render("#paypal-donate-button-container");
            }
        };
        document.body.appendChild(paypalScript);
    }, [donateAmount]); // Re-render PayPal button when amount changes

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
			{/* <button className={"donateButton"} onClick={handleDonateButtonClick}>{intl.formatMessage({id: "donate"})}</button> */}
			<div id="paypal-donate-button-container" style={{ marginTop: "20px"}}></div>
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