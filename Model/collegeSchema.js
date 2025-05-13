const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
   col_id: {
      type: String,
      required: true,
   },
   col_name: {
      type: String,
      required: true,
   },
   col_location: {
      type: String,
      required: true,
   },
   col_type: {
      type: String,
      required: true,
   },
   col_status: {
      type: Array,
      required: true,
   },
   col_ranking: {
      type: String,
      required: true,
   },
   col_description: {
      type: String,
      required: true,
   },
   col_admission: {
      type: String,
      required: true,
   },
   col_image_url: {
      type: String,
      required: true,
   },
   col_courses: {
      type: Array,
      required: true,
   },
});

const colleges = mongoose.model("colleges", collegeSchema);

module.exports = colleges;
