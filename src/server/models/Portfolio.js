const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    label: String,
    text: String,
    image: String,
}, { strict: false });

module.exports = mongoose.model("Portfolio", portfolioSchema);