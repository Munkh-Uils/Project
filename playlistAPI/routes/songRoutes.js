const express = require("express");
const {createSong, getSong, deleteSong, addToPlaylist} = require("../controllers/songController")

const router = express.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/song/:id", addToPlaylist)
  .delete("/song/:id", deleteSong);

exports.songRoutes = router;