const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/verse", (request, response) => {
    response.send("Hello Universe!");
  });
  
  app.listen(3003, () => {
    console.log("I am listening for requests on port 3003!");
  });
  