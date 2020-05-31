const express = require("express");
// const mongodb = require("mongodb");

const router = express.Router();

//GET Post
router.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

//GET post

//DELETE

module.exports = router;
