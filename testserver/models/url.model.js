const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
});

const Url = model("Url", urlSchema);

module.exports = Url;