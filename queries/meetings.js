const db = require("../db/config");

const getAllMeetings = async (file_id) => {
  const queryOne = "SELECT * FROM files WHERE id=$1";
  const authCheck = await db.any(queryOne, [file_id]);
  if (authCheck.length) {
    try {
      const queryTwo = "SELECT * FROM meetings WHERE file_id=$1";
      const allMeetings = await db.any(queryTwo, file_id);
      return { status: true, payload: allMeetings };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

const getMeeting = async (id, file_id) => {
  const queryOne = "SELECT * FROM files WHERE id=$12";
  const authCheck = await db.any(queryOne, [file_id]);
  if (authCheck.length) {
    try {
      const query = "SELECT * FROM meetings WHERE id=$1 AND file_id=$2 ";
      const meeting = await db.one(query, [id, file_id]);
      return { status: true, payload: meeting};
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

module.exports = {
    getAllMeetings,
    getMeeting,
};