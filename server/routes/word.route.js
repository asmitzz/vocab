const express = require('express');
const router = express.Router();
const { getAllWords,addWord } = require('../controllers/word.controller');

router.route("/")
.get(getAllWords)
.post(addWord);

module.exports = router;