// User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["candidate", "recruiter"], required: true },
    skills: [String],
    experience: { type: Number, default: 0 },
    profilePic: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
