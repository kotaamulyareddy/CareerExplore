const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");
const collegeVitaRoutes = require("./routes/collegevita");
const careersRoutes = require("./routes/careers");
const ttcRoutes = require("./routes/ttcRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/collegevita", collegeVitaRoutes);
app.use("/api/careers", careersRoutes);
app.use("/api/ttc", ttcRoutes); 
app.get("/", (req, res) => {
  res.send("Backend API Running");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.log("MongoDB connection error:", err.message)
  );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});