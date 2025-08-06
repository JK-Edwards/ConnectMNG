import React, { useEffect } from "react";
import Swal from "sweetalert2";

declare global {
	interface Window {
		paypal: any;
	}
}

interface PaypalButtonProps {
	donateAmount: string;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ donateAmount }) => {
	useEffect(() => {
		const loadPayPalScriptAndRenderButton = () => {
			if (!document.querySelector("#paypal-sdk")) {
				const paypalScript = document.createElement("script");
				paypalScript.id = "paypal-sdk";
				paypalScript.src =
					"https://www.paypal.com/sdk/js?client-id=Af-06IqdQXS5jMsHYPPkrftpMBt_FjXjt1tqRAmv7igstLdxn4DLMVgPua1Wa3EE3Pd2p1y-b6tFMeon&currency=USD";
				paypalScript.async = true;
				paypalScript.onload = () => renderPaypalButton();
				document.body.appendChild(paypalScript);
			} else {
				renderPaypalButton();
			}
		};

		const renderPaypalButton = () => {
			const container = document.querySelector("#paypal-donate-button-container");
			if (container) {
				container.innerHTML = "";
			}

			if (window.paypal) {
				window.paypal
					.Buttons({
						createOrder: (_data: any, actions: any) => {
							const sanitizedAmount = donateAmount.replace("$", "");
							if (!sanitizedAmount || isNaN(Number(sanitizedAmount))) {
								Swal.fire({
									icon: "error",
									title: "Invalid Amount",
									text: "Please select a valid donation amount.",
								});
								return;
							}
							return actions.order.create({
								purchase_units: [
									{
										amount: {
											value: sanitizedAmount,
										},
									},
								],
							});
						},
						onApprove: (_data: any, actions: any) => {
							return actions.order.capture().then((details: any) => {
								Swal.fire({
									icon: "success",
									title: "Donation Successful",
									text: `Thank you for your donation, ${details.payer.name.given_name}!`,
								});
							});
						},
					})
					.render("#paypal-donate-button-container");
			}
		};

		loadPayPalScriptAndRenderButton();
	}, [donateAmount]);

	return <div id="paypal-donate-button-container" style={{ marginTop: "20px" }} />;
};

export default PaypalButton;
