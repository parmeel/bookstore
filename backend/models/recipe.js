const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    cuisine: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Number, required: true }
});

module.exports = mongoose.model("Recipe", postSchema);
