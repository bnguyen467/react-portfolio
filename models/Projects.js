const { model, Schema } = require("mongoose");

const Project = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: false,
  },
  webLink: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: false,
  },
});

module.exports = model("Project", Project);
