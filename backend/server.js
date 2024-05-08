import express from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
