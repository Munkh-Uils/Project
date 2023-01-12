const { Schema, model } = require("mongoose");
const shortId = require("shortid");

const urlSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
});

const Url = model("Url", urlSchema);

module.exports = Url;
