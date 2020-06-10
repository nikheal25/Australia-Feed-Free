// Documentation - https://jobs.github.com/api

const axios = require("axios");

const url = "https://jooble.org/api/";
const key = "c403dcc5-77c9-40c7-b7af-df80733420f9";

const params = {
  keywords: "Web Developer",
  location: "Melbourne",
  radius: "50",
  page: "1",
};

axios
  .post(url + key, params)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
