const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
    name: String,
    text: String,
    icon: String,
}, { strict: false });

module.exports = mongoose.model("Page", pageSchema);