const { User } = require("../models/userModel");

exports.createUser = async (req, res) => {
  const body = req.body;
  const result = await new User(body).save();
  res.send(result);
};

exports.getUsers = async (req, res) => {
  const result = await User.find({});
  res.send(result);
};

exports.getUser = async (req, res) => {
  const result = await User.find({});
  res.send(result);
};

exports.addToPlaylist = async (req, res) => {
  const playlistId = req.query.playlistId;
  const songId = req.params.id;

  const playlist = await Playlist.findById(playlistId);
  playlist.songs.push(songId);

  await playlist.save();

  res.send(playlist);
};
