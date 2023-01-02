const { Schema, Types, model } = require("mongoose");

const songSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema,
    },
    playlistId : Types.ObjectId,
    artist: String,
    duraction: String,
    creatorId: Types.ObjectId,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    isPrivates: Boolean,
});

const Song = model('song', songSchema);

exports.Song = Song