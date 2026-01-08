const express = require("express");
const router = express.Router();
const CollegeVita = require("../models/CollegeVita");
router.get("/", async (req, res) => {
  try {
    const colleges = await CollegeVita.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;



