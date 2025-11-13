import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// CREATE JOB
router.post("/create", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.json({ message: "Job created", job });
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
});

// GET ALL JOBS
router.get("/all", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

export default router;
