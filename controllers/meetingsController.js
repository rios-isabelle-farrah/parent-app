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
  const { file_id } = params;
  // const uid = req.query.uid;
  try {
    const meeting = await addMeeting(body, file_id);
    res.json(meeting);
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
  const { body, params } = req;
  const { id } = params;
  // const uid = req.query.uid;
  try {
    const meeting = await updateMeeting(id, body);
    res.json(meeting);
  } catch (error) {
    return error;
  }
});



module.exports = meetings;