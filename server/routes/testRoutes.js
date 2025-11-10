// testRoutes.js
import express from "express";
import User from "../models/User.js";
const router = express.Router();

// Simple test route to verify DB connection
router.get("/", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ message: "✅ Test route working!", users: userCount });
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching data", error: error.message });
  }
});

export default router;
