const express = require("express");
const collegeController = require("../Controller/collegeController");
const gSheetsController = require("../Controller/gSheetsController");

const router = new express.Router();

router.get("/", (req, res) => {
   res.send("Welcome to the College API");
});

router.get("/colleges/india", collegeController.getColleges);

router.get('/courses/india', collegeController.getCourses)

router.get('/courses', collegeController.getCourses)

router.post('/rawscholar/register', gSheetsController.addToSheets);

module.exports = router;
