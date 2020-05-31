const mongoose = require("mongoose");

const packagesForStudents = mongoose.Schema({
  packageId: String,
  title: String,
  subtitle: String,
  profitablity: Number,
  amountLow: Number,
  amountHigh: Number,
  eligibilityCriteria: String,
  universityCriteria: Boolean,
  universityName: String,
  areaCriteria: Boolean,
  area: String,
  timePeriodStart: String,
  timePeriodEnd: String,
  linkToMoreInfo: String,
});

module.exports = mongoose.model("Packages", packagesForStudents);
