import React, { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPayPalScriptAndRenderButton = () => {
      if (!document.querySelector("#paypal-sdk")) {
        const paypalScript = document.createElement("script");
        paypalScript.id = "paypal-sdk";
        paypalScript.src =
          "https://www.paypal.com/sdk/js?client-id=Af-06IqdQXS5jMsHYPPkrftpMBt_FjXjt1tqRAmv7igstLdxn4DLMVgPua1Wa3EE3Pd2p1y-b6tFMeon&currency=USD";
        paypalScript.async = true;
        paypalScript.onload = () => renderPaypalButton();
        paypalScript.onerror = () => {
          Swal.fire({
            icon: "error",
            title: "PayPal SDK Failed",
            text: "Unable to load PayPal. Please disable ad blockers and try again.",
          });
        };
        document.body.appendChild(paypalScript);
      } else {
        renderPaypalButton();
      }
    };

    const renderPaypalButton = () => {
      if (containerRef.current && window.paypal) {
        containerRef.current.innerHTML = ""; // Clear container before rendering

        window.paypal
          .Buttons({
            createOrder: (_data: any, actions: any) => {
              const sanitizedAmount = donateAmount.replace("$", "");
              const amountValue = parseFloat(sanitizedAmount) || 0.01;
              if (isNaN(amountValue) || amountValue < 0.01) {
                Swal.fire({
                  icon: "error",
                  title: "Invalid Amount",
                  text: "Please select a valid donation amount (minimum $0.01).",
                });
                return Promise.reject("Invalid amount");
              }
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amountValue.toFixed(2),
                      currency_code: "USD",
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
            onError: (err: any) => {
              console.error("PayPal Error:", err);
              Swal.fire({
                icon: "error",
                title: "Donation Failed",
                text: "An error occurred. Please disable ad blockers and try again.",
              });
            },
          })
          .render(containerRef.current);
      }
    };

    loadPayPalScriptAndRenderButton();

    return () => {
      // Cleanup: Remove button if component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [donateAmount]);

  return <div ref={containerRef} style={{ marginTop: "20px" }} />;
};

export default PaypalButton;