const universities = require("../Model/universitySchema");
const universityCourses = require("../Model/universityCoursesSchema");

exports.getUniversities = async (req, res) => {
   try {
      const { uni_id, country, search } = req.params;
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 12; // Default to 12 items per page
      const skip = (page - 1) * limit;

      let filter = {};

      if (uni_id) {
         filter.uni_id = uni_id;
      } else if (country) {
         filter.country = country; // Adjust this based on your schema
      } else if (search) {
         filter.search = search;
      }

      const total = await universities.countDocuments();
      const universitiesData = await universities
         .find(filter)
         .skip(skip)
         .limit(limit);

      res.status(200).json({
         total,
         page,
         totalPages: Math.ceil(total / limit),
         data: universitiesData,
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.getCourses = async (req, res) => {
   try {
      const { uni_id, course_id, search } = req.params;
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 12; // Default to 10 items per page
      const skip = (page - 1) * limit;

      let filter = {};

      if (uni_id) {
         filter.uni_id = uni_id;
      } else if (course_id) {
         filter.course_id = course_id;
      } else if (search) {
         filter.course_name = search;
      }

      const total = await universityCourses.countDocuments(filter);
      const coursesData = await universityCourses
         .find(filter)
         .skip(skip)
         .limit(limit);

      res.status(200).json({
         total,
         page,
         totalPages: Math.ceil(total / limit),
         coursesData,
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
