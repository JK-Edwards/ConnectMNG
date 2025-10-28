const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userId = payload.sub; // unique Google user ID
    const name = payload.name;

    // Create your session JWT
    const sessionToken = jwt.sign({ userId, name }, JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "strict",
    });

    res.json({ message: "Login successful", user: { userId, name } });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(401).json({ error: "Invalid Google token" });
  }
});

module.exports = router;