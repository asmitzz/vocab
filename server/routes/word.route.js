const express = require('express');
const router = express.Router();
const { getAllWords } = require('../controllers/word.controller');

router.route("/")
.get(getAllWords);

module.exports = router;