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
// const User = db.model('User', userSchema);

// const user = new User({ name: '', email: '' });

// const err = await user.validate().then(() => null, err => err);
// err.errors['name']; // ValidatorError
// err.errors['email']; // ValidatorError

const Playlist = model('Playlist', playlistSchema);

exports.Playlist = Playlist