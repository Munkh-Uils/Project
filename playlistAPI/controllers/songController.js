const { Playlist } = require("../models/playlistModel");
const { Song } = require("../models/songModel");

exports.createSong = async (req, res) => {
  const body = req.body;

  const result = await new Song(body).save();
  res.send(result);
};

exports.getSong = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await Song.find({ playlistId });
    return res.send(result);
  }

  const result = await Song.find({});
  res.send(result);
};

exports.deleteSong = async (req, res) => {
  const id = req.params.id;
  await Song.deleteOne({ _id: id });
  res.send("deleted");
};

exports.addToPlaylist = async (req, res) => {
  const playlistId = req.query.playlistId;
  const songId = req.params.id;

  const playlist = await Playlist.findById(playlistId);
  playlist.songs.push(songId);

  await playlist.save();

  res.send(playlist);
};