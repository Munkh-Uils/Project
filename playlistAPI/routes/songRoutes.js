const express = require("express");
const {createSong, getSongs, getSong} = require("../controllers/songController")

const router = express.Router();

router
  .get("/songs", getSongs)
  .get("/songs/:id", getSong)
  .post("/songs", createSong)
  .put("/songs/:id", () => {})
  .delete("/songs/:id", () => {});

exports.songRoutes = router;