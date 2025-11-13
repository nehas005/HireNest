import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  skills: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Job", jobSchema);
