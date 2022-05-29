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
  const { child_name, details } =
    file;
  try {
    const query =
      "INSERT INTO files (child_name, details) VALUES ($1, $2) RETURNING *";
    const newFile = await db.one(query, [
      child_name,
      details
    ]);
    return { status: true, payload: newFile };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteFile = async (id) => {
  try {
    const query = "DELETE FROM files WHERE id=$1 RETURNING *";
    const deletedFile = await db.one(query, [id]);
    return { status: true, payload: deletedFile };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateFile = async (id, file) => {
  const { child_name, details } =
  file;
    try {
      const query =
        "UPDATE files SET child_name=$1, details=$2 WHERE id=$3 RETURNING *";
      const updatedFile = await db.one(query, [
        child_name,
        details,
        id
      ]);
      return { status: true, payload: updatedFile };
    } catch (error) {
      return { status: false, payload: error};
    }

};









module.exports = { getAllFiles, getFile, addFile, deleteFile, updateFile };
