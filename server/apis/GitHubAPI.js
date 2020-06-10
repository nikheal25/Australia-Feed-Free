// Documentation - https://jobs.github.com/api

const axios = require("axios");

axios
  .get("https://jobs.github.com/positions.json?location=australia")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
