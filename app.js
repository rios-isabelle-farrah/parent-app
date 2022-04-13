// const express = require("express");
// const req = require("express/lib/request")
// const app = express();

// const studentsController = require('./controllers/studentsController')


// app.use("./students, studentsController")

// app.get("/studentData", (request, response) => {
//     response.json(studentData);
//   });
  
//   app.listen(3003, () => {
//     console.student("I am listening for requests on port 3003!");
//   });
  

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const studentsController = require("./controllers/studentController");

// app.use(cors());

// app.use(express.json());

// app.use("/students", studentsController);

// app.get("/",(req, res) => {
//     res.send("welcome to the captain's student")
// })

// app.get("*", (req, res) => {
//     res.status(404).json({error: "Page not Found"})
// })

// module.exports = app;








const { response } = require("express");
const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

// const mathController = require("./controllers/mathController");
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

