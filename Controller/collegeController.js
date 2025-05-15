const colleges = require("../Model/collegeSchema");
const courses = require("../Model/courseSchema");

exports.getColleges = async (req, res) => {
   try {
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 12; // Default to 10 items per page
      const skip = (page - 1) * limit;
      const total = await colleges.countDocuments();
      const collegesData = await colleges.find().skip(skip).limit(limit);

      res.status(200).json({
         total,
         page,
         totalPages: Math.ceil(total / limit),
         data: collegesData,
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.getCourses = async (req, res) => {
   const { search_query, selected_state, course_id } = req.query;
   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit) || 18;
   const skip = (page - 1) * limit;

   console.log(course_id);
   
   try {
      let filter = {};

      if (search_query) {
         filter.course_name = { $regex: search_query, $options: "i" }; // Case-insensitive partial match
      }

      if (selected_state) {
         filter.course_in_state = selected_state; // Adjust this based on your schema
      }

      if (course_id) {
         filter.course_id = course_id;
      }      

      const total = await courses.countDocuments(filter);
      const coursesData = await courses.find(filter).skip(skip).limit(limit);

      res.status(200).json({
         filter,
         total,
         page,
         totalPages: Math.ceil(total / limit),
         data: coursesData,
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
