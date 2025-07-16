const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
   uni_id: {
      type: String,
      required: true,
   },
   country: {
      type: String,
      required: true,
   },
   university_name: {
      type: String,
      required: true,
   },
   university_location: {
      type: String,
      required: true,
   },
   university_image: {
      type: String,
      required: true,
   },
   courses: {
      type: Array,
      required: true,
   },
});

const universities = mongoose.model("universities", universitySchema);

module.exports = universities;
