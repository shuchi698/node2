const express = require("express"); //loads the express 

const port = 8000;

const app = express();

//route creation

app.get("/", (req, res) => {
  res.send("Hello there") //text data
})

app.get("/api/main", (req, res) => {
  res.send("<h1>Express.Js</h1>")
 })
 
app.listen(port);
