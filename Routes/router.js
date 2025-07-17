const express = require("express");
const collegeController = require("../Controller/collegeController");
const gSheetsController = require("../Controller/gSheetsController");
const universityController = require("../Controller/universityController");

const router = new express.Router();

router.get("/", (req, res) => {
   res.send("Welcome to the College API");
});

router.get("/colleges/india", collegeController.getColleges);

router.get("/courses/india", collegeController.getCourses);

router.get("/courses", collegeController.getCourses);

router.post("/rawscholar/register", gSheetsController.addToSheets);

router.get("/:country/universities", universityController.getUniversities);

router.get("/universities/:uni_id", universityController.getUniversities);

router.get("/:uni_id/courses", universityController.getCourses);

router.get("/courses/:course_id", universityController.getCourses);

router.get("/search/courses", universityController.getCourses);

module.exports = router;
