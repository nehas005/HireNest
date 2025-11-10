// Job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    skillsRequired: [String],
    experienceLevel: { type: String, enum: ["Junior", "Mid", "Senior"] },
    location: String,
    salaryRange: String,
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
