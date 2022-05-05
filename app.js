// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
//const filesController = require("./controllers/filesController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

// const db = require("./db/config");


// app.use("/files", filesController);


app.get("/", (req, res) => {
  res.send("Welcome to Parent Files!");
});


// const db = require("./db/config");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM files");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });




/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////




app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
