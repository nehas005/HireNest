// Schedule.js
import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    date: { type: Date, required: true },
    meetingLink: String,
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Schedule", scheduleSchema);
