const express = require("express");
const meetings = express.Router({
  mergeParams: true,
});

const {
  getAllMeetings,
  getMeeting,
  addMeeting,
  deleteMeeting,
  updateMeeting,
} = require("../queries/meetings");

meetings.get("/", async (req, res) => {
  const { file_id } = req.params;
//   const uid = req.query.uid;
  try {
    const allMeetings = await getAllMeetings(file_id);
    res.json(allMeetings);
  } catch (error) {
    return error;
  }
});

meetings.get("/:id", async (req, res) => {
  const { file_id, id } = req.params;
//   const uid = req.query.uid;
  try {
    const meeting = await getMeeting(id, file_id);
    res.json(meeting);
  } catch (error) {
    return error;
  }
});

meetings.post("/", async (req, res) => {
  const { body, params } = req;
  const { file_id,id } = params;
console.log(body,"b")
console.log(file_id,"f")
console.log(id,"i")
  try {
    const newestMeeting = await addMeeting(body, id, file_id);
    res.json(newestMeeting);
  } catch (error) {
    return error;
  }
});

meetings.delete("/:id", async (req, res) => {
  // const uid = req.query.uid;
  const { id, file_id } = req.params;
  try {
    const meeting = await deleteMeeting(id, file_id);
    res.json(meeting);
  } catch (error) {
    return error;
  }
});



meetings.put("/:id", async (req, res) => {
  const { body, params} = req;
  const { id, file_id } = params;
  // const uid = req.query.uid;
  // console.log(body,"body")
  // console.log(file_id,"file_id")
  // console.log(id,"id")
  try {
    const meeting = await updateMeeting( body, id, file_id);
    res.json(meeting);
  } catch (error) {
    return error;
  }
});



module.exports = meetings;