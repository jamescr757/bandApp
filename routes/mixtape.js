const express = require("express");
const router = express.Router();
const data = require('../data/mixtapes.json');

router.get("/mixtape/:name", (req, res) => {
    const mixtapeIdx = data.mixtapes.findIndex(album => album.shortname === req.params.name)
    res.render("album", {
        album: data.mixtapes[mixtapeIdx]
    });
})

module.exports = router;