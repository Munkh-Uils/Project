const express = require("express");
const {createArtist, getArtists, getArtist} = require("../controllers/artistController")

const router = express.Router();

router
  .get("/artists", getArtists)
  .get("/artists/:id", getArtist)
  .post("/artists", createArtist)
  .put("/artists/:id", () => {})
  .delete("/artists/:id", () => {});

exports.artistRoutes = router;