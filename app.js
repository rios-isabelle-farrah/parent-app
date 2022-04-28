const express = require("express");
const cors = require("cors")
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors())
const studentController = require("./controllers/studentController");

// app.use("/math", mathController);
app.use("/students", studentController);

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

