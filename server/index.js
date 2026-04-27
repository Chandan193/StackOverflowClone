import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./connectMongoDb.js";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";

dotenv.config();

const app = express();

const normalizeOrigin = (origin = "") => origin.trim().replace(/\/+$/, "");
const defaultAllowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://stack-overflow-clone-alpha-ten.vercel.app",
];

// Allowed origins from ENV (supports multiple URLs)
const envAllowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => normalizeOrigin(origin))
  .filter(Boolean);

const allowedOrigins = [...new Set([...defaultAllowedOrigins, ...envAllowedOrigins])];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    const normalizedRequestOrigin = normalizeOrigin(origin);

    if (allowedOrigins.includes(normalizedRequestOrigin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

// Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

// Test route
app.get("/", (req, res) => {
  res.send("This is a Stack Overflow Clone API");
});

// Routes
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();