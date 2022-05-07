const db = require("../db/config");





const getAllFiles = async () => {
  try {
    const allFiles = await db.any("SELECT * FROM files");
    return allFiles;
  } catch (err) {
    return err;
  }
};


// const getAllFiles = async (uid) => {
//   try {
//     const query = "SELECT * FROM files WHERE uid=$1";
//     const allFiles = await db.any(query, uid);
//     return { status: true, payload: allFiles };
//   } catch (error) {
//     return { status: false, payload: error };
//   }
// };

const getFile = async (id) => {
  try {
    const query = "SELECT * FROM files WHERE id=$1";
    const file = await db.one(query, [id]);
    return { status: true, payload: file };
  } catch (error) {
    return { status: false, payload: error };
  }
};





// const getFile = async (id, uid) => {
//   try {
//     const query = "SELECT * FROM files WHERE id=$1 and uid=$2";
//     const file = await db.one(query, [id, uid]);
//     return { status: true, payload: file };
//   } catch (error) {
//     return { status: false, payload: error };
//   }
// };

const addFile = async (file) => {
  const { child_name, uid, additional_info } =
    file;
  try {
    const query =
      "INSERT INTO files (child_name, uid, additional_info) VALUES ($1, $2, $3) RETURNING *";
    const newFile = await db.one(query, [
      child_name,
      uid,
      additional_info
    ]);
    return { status: true, payload: newFile };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteFile = async (id, uid) => {
  try {
    const query = "DELETE FROM files WHERE id=$1 AND uid=$2 RETURNING *";
    const deletedFile = await db.one(query, [id, uid]);
    return { status: true, payload: deletedFile };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateFile = async (id, body, uid) => {
  const { child_name, additional_info} = body;
  const queryOne = "SELECT * FROM files WHERE uid=$1 AND id=$2";
  const authCheck = await db.any(queryOne, [uid, id]);
  if (authCheck.length) {
    try {
      const query =
        "UPDATE files SET child_name=$1, additional_info=$2, uid=$3  WHERE id=$4 RETURNING *";
      const updatedFile = await db.one(query, [
        child_name,
        additional_info,
        uid,
        id,
      ]);
      return { status: true, payload: updatedFile };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

module.exports = { getAllFiles, getFile, addFile, deleteFile, updateFile };
