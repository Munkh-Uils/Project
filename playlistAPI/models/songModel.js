const { Schema, Types, model } = require("mongoose");

const songSchema = new Schema({
    title: String,
    description: String,
    creatorId: Types.ObjectId,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    isPrivates: Boolean,
});

const Song = model('Song', songSchema);

exports.Song = Song