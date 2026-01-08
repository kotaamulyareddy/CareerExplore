const mongoose = require("mongoose");
const CollegeSchema = new mongoose.Schema({
  "College Name": String,
  City: String,
  State: String,
  Country: String,
  "College Type": String,
  Rating: Number,
  "Established Year": Number,
  "Campus Size": String,
  "Total Student Enrollments": Number,
  "Total Faculty": Number,
  "Average Fees": Number,
  Courses: String,
  Facilities: String
});
module.exports = mongoose.model("CollegeVita", CollegeSchema);


