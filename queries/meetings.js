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








const addMeeting = async (body, file_id) => {
  const { category, details, date } = body;
  const queryOne = "SELECT * FROM files WHERE id=$1";
  const authCheck = await db.any(queryOne, [file_id]);

  if (authCheck.length) {
    try {
      const queryTwo =
        "INSERT INTO meetings (file_id, category, details, date) VALUES ($1, $2, $3, $4) RETURNING *";
      const newMeeting = await db.one(queryTwo, [
        file_id,
        category,
        details,
        date,
      ]);
      return { status: true, payload: newMeeting };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

const deleteMeeting = async (id, file_id) => {
  const queryOne = "SELECT * FROM files WHERE id=$1";
  const authCheck = await db.any(queryOne, [file_id]);
  if (authCheck.length) {
    try {
      const query =
        "DELETE FROM meetings WHERE id=$1 AND file_id=$2 RETURNING *";
      const deletedMeeting = await db.one(query, [id, file_id]);
      return { status: true, payload: deletedMeeting };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

const updateMeeting = async (id, meeting) => {
  const { file_id, category, details, date } = meeting;
  const queryOne = "SELECT * FROM files WHERE id=$1";
  const authCheck = await db.any(queryOne, [file_id]);
  if (authCheck.length) {
    try {
      const queryTwo =
        "UPDATE meetings SET file_id=$1, category=$2, details=$3, date=$4 WHERE id=$5 RETURNING *";
      const updatedMeeting = await db.one(queryTwo, [
        file_id,
        category,
        details,
        date,
        id,
      ]);
      return { status: true, payload: updatedMeeting };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }

}

module.exports = {
    getAllMeetings,
    getMeeting,
    addMeeting,
    deleteMeeting,
    updateMeeting,
};