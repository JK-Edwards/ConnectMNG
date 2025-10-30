import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./SignUpForm.css"; // keep your styling

export default function SignUp() {
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const res = await fetch("http://localhost:3000/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include",
      });

      const data = await res.json();
      console.log("User signed up/logged in:", data);

      // Optionally redirect to home or dashboard
      // window.location.href = "/";
    } catch (err) {
      console.error("Backend Google signup error:", err);
      alert("Sign up failed. Try again.");
    }
  };

  const handleError = () => {
    console.error("Google signup failed");
    alert("Google signup failed. Try again.");
  };

  return (
    <div className="formContainer">
      <h2>Sign Up</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}