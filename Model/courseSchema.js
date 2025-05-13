const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
   course_id: {
      type: String,
      required: true,
   },
   college_name: {
      type: String,
      required: true,
   },
   course_name: {
      type: String,
      required: true,
   },
   course_eligibility: {
      type: String,
      required: true,
   },
   course_details: {
      type: Array,
      required: true,
   },
});

const courses = mongoose.model("courses", courseSchema);

module.exports = courses;