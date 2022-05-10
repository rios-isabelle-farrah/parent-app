const express = require("express");
const files = express.Router();
// const { getAllFiles } = require("../queries/files");
const {
  getAllFiles,
  getFile,
  addFile,
  deleteFile,
  updateFile,
} = require("../queries/files");



const meetingsController = require("./meetingsController");
files.use("/:file_id/meetings", meetingsController);





files.get("/", async (req, res) => {
  const allFiles = await getAllFiles();
 console.log(res,'test')
  res.json({ success: true, payload: allFiles });
});



files.get("/:id", async (req, res) => {
  const { id } = req.params;
  // const uid = req.query.uid;
  try {
    const file = await getFile(id);
    res.json(file);
  } catch (error) {
    return error;
  }
});

files.post("/", async (req, res) => {
  try {
    const files = await addFile(req.body);
    res.json(files);
  } catch (error) {
    return error;
  }
});

files.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // const uid = req.query.uid;
  try {
    const file = await deleteFile(id);
    res.json(file);
  } catch (error) {
    return error;
  }
});

files.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  // const uid = req.query.uid;
  try {
    const file = await updateFile(id, body);
    res.json(file);
  } catch (error) {
    return error;
  }
});

module.exports = files;
