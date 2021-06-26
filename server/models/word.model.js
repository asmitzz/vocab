const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word:{
        type:Object,
        required:true
    }
});

const Words = new mongoose.model("Word",WordSchema);

module.exports = Words;