const Words = require("../models/word.model");

const getAllWords = async(req,res) => {
    const words = await Words.find({}).lean();
    res.status(200).json({ words })
}

module.exports = { getAllWords };