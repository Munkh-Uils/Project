const express = require("express");
const {createSong, getSong, deleteSong, AddToPlaylist} = require("../controllers/songController")

const router = express.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/song/:id", AddToPlaylist)
  .delete("/song/:id", deleteSong);

exports.songRoutes = router;