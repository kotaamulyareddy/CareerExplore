const express = require("express");
const router = express.Router();
const Career = require("../models/Career");
router.get("/", async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;

