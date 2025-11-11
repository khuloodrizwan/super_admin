import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" }, // 👈 new line (normal users by default)
});

const User = mongoose.model("User", userSchema);
export default User;
