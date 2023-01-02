const express = require("express");
const {createSong, getSongs, getSong} = require("../controllers/songController")

const router = express.Router();

router
  .get("/users", getSongs)
  .get("/users/:id", getSong)
  .post("/users", createSong)
  .put("/users/:id", () => {})
  .delete("/users/:id", () => {});

exports.songRoutes = router;