import React, { useState } from "react";

export default function DummyPostTester() {
  const [message, setMessage] = useState("");

  const registerUser = async () => {
    setMessage("Registering...");
    try {
        const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",  
        body: JSON.stringify({
            MemberUsername: "testuser",
            name: "Test User",
            password: "pass123",
        }),
        });
      const data = await response.json();
      setMessage(`Register response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage("Register error: " + error.message);
    }
  };

  const loginUser = async () => {
    setMessage("Logging in...");
    try {
        const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({ MemberUsername: "testuser", password: "pass123" }),
        });
      const data = await response.json();
      setMessage(`Login response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage("Login error: " + error.message);
    }   
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test POST Endpoints</h2>
      <button onClick={registerUser} style={{ marginRight: "10px" }}>
        Register User
      </button>
      <button onClick={loginUser}>Login User</button>
      <p>{message}</p>
    </div>
  );
}