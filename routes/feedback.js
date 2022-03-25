const express = require("express");
const fs = require("fs");
const router = express.Router();
const feedback = require("../data/feedback.json");

const updateJSON = (array) => {
    fs.writeFile("data/feedback.json", JSON.stringify(array), error => {
        if (error) console.log("There's been an error writing to feedback.json");
        else console.log("feedback.json updated successfully");
    })
}

router.get("/feedback", (req, res) => {
    res.render("feedback");
})

router.get("/api/feedback", (req, res) => {
    res.json(feedback);
})

router.post("/api/feedback", (req, res) => {
    feedback.unshift(req.body);
    updateJSON(feedback);
    res.json(feedback);
})

router.delete("/api/feedback", (req, res) => {
    const messageIndex = parseInt(req.body.index);
    feedback.splice(messageIndex, 1);
    console.log(feedback);
    updateJSON(feedback);
    res.json(feedback);
})

module.exports = router;