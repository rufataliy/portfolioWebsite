const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    label: String,
    text: String,
    img: String,
    url: String,
    techStack: String,
}, { strict: false });

module.exports = mongoose.model("Portfolio", portfolioSchema);