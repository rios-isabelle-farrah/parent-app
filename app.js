// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const filesController = require("./controllers/filesController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

app.use("/files", filesController);

app.get("/", (req, res) => {
  res.send("Welcome to Parent Files!");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/config");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
