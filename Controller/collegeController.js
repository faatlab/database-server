const colleges = require("../Model/collegeSchema");
const courses = require("../Model/courseSchema");

exports.getAllColleges = async (req, res) => {
   try {
      const collegesData = await colleges.find({});
      res.status(200).json(collegesData);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.getCourses = async (req, res) => {
   const { search_query, selected_state } = req.query;

   try {
      if (search_query && selected_state) {
         const coursesData = await courses.find({
            search_query,
            selected_state,
         });
         res.status(200).json(coursesData);
      } else {
         const coursesData = await courses.find({});
         res.status(200).json(coursesData);
      }
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
