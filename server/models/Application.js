// Application.js
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    applicantId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["applied", "under review", "interview", "hired", "rejected"],
      default: "applied",
    },
    coverLetter: String,
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
