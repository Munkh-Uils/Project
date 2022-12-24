const express = require("express");
const {createPlaylist, getPlaylist} = require("../controllers/playlistController")

const router = express.Router();

router
  .get("/playlists", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlists/:id", () => {})
  .delete("/playlists/:id", () => {});

exports.playlistRoutes = router;