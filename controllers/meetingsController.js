const express = require("express");
const meetings = express.Router({
  mergeParams: true,
});

const {
  getAllMeetings,
  getMeeting,
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

module.exports = meetings;