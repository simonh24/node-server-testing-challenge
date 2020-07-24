const express = require('express');
const Characters = require('./characters-model.js');
const router = express.Router();

router.get("/", (req, res) => {
    Characters.getCharacters()
        .then(chars => {
            res.status(200).json(chars);
        })
        .catch(err => res.status(500).json(err))
})

  module.exports = router;