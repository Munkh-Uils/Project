const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
    title: String,
    description: String,
    creatorId: Types.ObjectId,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    isPrivates: Boolean,
    songs: [{type: Schema.Types.ObjectId, ref: "Song"}],
});

const Playlist = model('Playlist', playlistSchema);

exports.Playlist = Playlist