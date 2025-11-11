import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // ✅ import your routes

dotenv.config();

const app = express();

// ✅ Allow frontend (React) to connect to backend
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse JSON data from frontend
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI:", MONGO_URI);

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing! Check your .env file.");
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// ✅ Use routes
app.use("/api/v1/auth", authRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
