const express = require("express");
const router = express.Router();
const data = require('../data/albums.json');

router.get("/", (req, res) => {
    res.render("index", {
        albums: data.albums,
        pageNumber: 0,
        albumPage: true
    });
})

module.exports = router;