const express = require("express");
const router = express.Router();
const data = require('../data/albums.json');

router.get("/album/:name", (req, res) => {
    const albumIdx = data.albums.findIndex(album => album.shortname === req.params.name)
    res.render("album", {
        album: data.albums[albumIdx]
    });
})

module.exports = router;