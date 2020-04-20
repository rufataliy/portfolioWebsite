const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
    name: String,
    image: String,
    text: String
}, { strict: false });

module.exports = mongoose.model("Page", pageSchema);