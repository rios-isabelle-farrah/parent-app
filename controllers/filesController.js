const express = require("express");
const files = express.Router();
const {
  getAllFiles,
  getFile,
  addFile,
  deleteFile,
  updateFile,
} = require("../queries/files");



files.get("/", async (req, res) => {
  const uid = req.query.uid;
  try {
    const allFiles = await getAllFiles(uid);
    res.json(allFiles);
  } catch (error) {
    return error;
  }
});

files.get("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const file = await getFile(id, uid);
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
  const uid = req.query.uid;
  try {
    const file = await deleteFile(id, uid);
    res.json(file);
  } catch (error) {
    return error;
  }
});

files.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  try {
    const file = await updateFile(id, body, uid);
    res.json(file);
  } catch (error) {
    return error;
  }
});

module.exports = files;
