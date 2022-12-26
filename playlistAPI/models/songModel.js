const { Schema, Types, model } = require("mongoose");

const songSchema = new Schema({
    playlistId : Types.ObjectId,
    name: String,
    artist: String,
    duraction: String,
    creatorId: Types.ObjectId,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    isPrivates: Boolean,
});

const Song = model('Song', songSchema);

exports.Song = Song