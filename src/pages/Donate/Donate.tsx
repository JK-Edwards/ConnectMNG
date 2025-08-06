import React, { useState, ChangeEvent, FC } from "react";
import { useIntl } from "react-intl";
import PaypalButton from "./PaypalButton";

import "./Donate.css";

const cashAmounts: string[] = ["$10", "$20", "$50", "$100", "$250", "$500"];

const Donate: FC = () => {
	const intl = useIntl();
	const [donateAmount, updateDonateAmount] = useState<string>("");

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		updateDonateAmount(event.target.value);
	};

	return (
		<div className="donateContainer">
			<h1>
				{intl.formatMessage({ id: "empowerYoungMongolians" }).toUpperCase()}
			</h1>
			<h2>
				{intl.formatMessage({ id: "donateConnectMNG" }).toUpperCase()}
			</h2>
			<h3>
				{intl.formatMessage({ id: "onetimeDonation" }).toUpperCase()}
			</h3>

			<div className="moneyButtonContainer">
				{cashAmounts.map((amount, index) => (
					<MoneyButton key={index} text={amount} onClick={() => updateDonateAmount(amount)} />
				))}
			</div>

			<input
				className="donateInput"
				placeholder={intl.formatMessage({ id: "customAmount" })}
				onChange={handleInputChange}
				value={donateAmount}
			/>

			<PaypalButton donateAmount={donateAmount} />
		</div>
	);
};

interface MoneyButtonProps {
	text: string;
	onClick: () => void;
}

const MoneyButton: FC<MoneyButtonProps> = ({ text, onClick }) => {
	return (
		<button className="moneyButton" onClick={onClick}>
			{text}
		</button>
	);
};

export default Donate;
