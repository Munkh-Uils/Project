const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const router = require("./routes/url.route");
require("dotenv").config();

connect();

const app = express();
app.use(express);

app.use(cors());
app.use(express.json());

app.use(router());

app.listen(4000, () => {
  console.log("Server running at:", 4000);
});
