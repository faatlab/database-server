const mongoose = require("mongoose");

const universityCourseSchema = new mongoose.Schema({
   course_id: {
      type: String,
      required: true,
   },
   uni_id: {
      type: String,
      required: true,
   },
   university_name: {
      type: String,
      required: true,
   },
   course_name: {
      type: String,
      required: true,
   },
   course_duration: {
      type: String,
      required: true,
   },
   tuition_fees: {
      type: String,
      required: true,
   },
   course_level: {
      type: String,
      required: true,
   },
   mode_of_course: {
      type: String,
      required: true,
   },
   english_exam_waiver: {
      type: String,
      required: true,
   },
   type_of_university: {
      type: String,
      required: true,
   },
  
});

const universityCourses = mongoose.model("universitycourses", universityCourseSchema);

module.exports = universityCourses;