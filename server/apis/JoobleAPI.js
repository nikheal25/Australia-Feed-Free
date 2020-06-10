// Documentation - https://jobs.github.com/api

const axios = require("axios");

const url = "https://jooble.org/api/";
const key = "c403dcc5-77c9-40c7-b7af-df80733420f9";

const findJobs = (
  location = "Australia",
  keyword = "Web Developer",
  radius = "50",
  page = "1"
) => {
  // const params = {
  //     keywords: "Web Developer",
  //     location: "Melbourne",
  //     radius: "50",
  //     page: "1",
  // };

  const params = {
    keywords: keyword,
    location: location,
    radius: radius,
    page: page,
  };

  axios
    .post(url + key, params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = findJobs;
