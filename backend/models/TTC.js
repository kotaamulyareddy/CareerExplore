const mongoose = require("mongoose");
const TTCSchema = new mongoose.Schema({
  partner: String,
  course: String,
  skills: String,       
  rating: Number,
  reviewcount: String,
  level: String,
  certificatetype: String,
  duration: String,
  crediteligibility: Boolean
});
module.exports = mongoose.model("TTC", TTCSchema);
