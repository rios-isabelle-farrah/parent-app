
// set up controller
const express = require("express");
const router = express.Router();

// make studentData available

const studentData = require("../studentData.json");

//specify routes belonging to this controller

// get all student

router.get("/", (request, response) => {
  response.json(studentData);
});

//get student by id
router.get("/:id", (request, response) => {
  const studentId = request.params.id;

  const students = studentData.students;

  const singleStudent = students.find((student) => student.id === studentId); // find gives you the the object and the filter gives you the array within the object.

  response.json({ singleStudent }); // send the json for the student with the id of the url
});

module.exports = router;