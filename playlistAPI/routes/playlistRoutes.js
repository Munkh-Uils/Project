const express = require("express");
const {createPlaylist, getPlaylists, getPlaylist} = require("../controllers/playlistController")

const router = express.Router();

router
  .get("/playlists", getPlaylists)
  .get("/playlists/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlists/:id", () => {})
  .delete("/playlists/:id", () => {});

exports.playlistRoutes = router;