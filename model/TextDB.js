const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new Schema({
  textArray: [String]
});

module.exports = mongoose.model("TextDB", textSchema);
