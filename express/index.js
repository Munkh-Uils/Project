const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const data = [
  {
    name: "uilse",
    age: "14",
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(5000);
