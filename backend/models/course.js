const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  course_name: String,
  skills: String,
  difficulty: String,
  rating: Number,
});
module.exports = mongoose.model("Course", courseSchema);
