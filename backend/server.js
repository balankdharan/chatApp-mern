import express from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
