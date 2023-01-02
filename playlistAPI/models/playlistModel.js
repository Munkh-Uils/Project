const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    isPrivate: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
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