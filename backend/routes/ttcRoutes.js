const express = require("express");
const router = express.Router();
const TTC = require("../models/TTC");
router.get("/", async (req, res) => {
  try {
    const ttcData = await TTC.find();
    const fixedData = ttcData.map(item => {
      let skills = item.skills;
      if (typeof skills === "string") {
        skills = skills
          .replace(/[{}"]/g, "")
          .split(",")
          .map(s => s.trim());
      }
      return {
        ...item._doc,
        skills
      };
    });
    res.json(fixedData);
  } catch (error) {
    res.status(500).json({ message: "TTC fetch failed" });
  }
});

module.exports = router;
