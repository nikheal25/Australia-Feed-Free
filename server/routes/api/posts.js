const express = require("express");
// const mongodb = require("mongodb");
const packageModel = require("../../models/packages");
const router = express.Router();

//GET Post
router.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

//POST
router.post("/", (req, res, next) => {
  console.log(
    `-----------------------  ${req}----------------------------------------------------`
  );

  const package = new packageModel({
    packageId: "",
    title: "",
    subtitle: "",
    profitablity: "",
    amountLow: "",
    amountHigh: "",
    eligibilityCriteria: "",
    universityCriteria: "",
    universityName: "",
    areaCriteria: "",
    area: "",
    timePeriodStart: "",
    timePeriodEnd: "",
    linkToMoreInfo: "",
  });

  package
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

//DELETE

module.exports = router;
