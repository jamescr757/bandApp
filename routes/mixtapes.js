const express = require("express");
const router = express.Router();
const data = require('../data/mixtapes.json');

router.get("/mixtapes", (req, res) => {
    res.render("index", {
        albums: data.mixtapes,
        pageNumber: 2,
        albumPage: false
    });
})

module.exports = router;