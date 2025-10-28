import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./LoginForm.css"; // keep your styling

export default function LoginForm() {
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const res = await fetch("http://localhost:3000/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include", // ensures cookie is sent
      });

      const data = await res.json();
      console.log("Logged in user:", data);

      // Optionally redirect to home or dashboard
      // window.location.href = "/"; 
    } catch (err) {
      console.error("Backend Google login error:", err);
      alert("Login failed. Try again.");
    }
  };

  const handleError = () => {
    console.error("Google login failed");
    alert("Google login failed. Try again.");
  };

  return (
    <div className="formContainer">
      <h2>Login</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}