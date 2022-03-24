const express = require("express");
const router = express.Router();
const data = require('../data/albums.json');

router.get("/albums", (req, res) => {
    res.render("index", {
        albums: data.albums,
        pageNumber: 1,
        albumPage: true
    });
})

module.exports = router;