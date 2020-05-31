const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
console.log("1");

const db = require("./config/db");
db();
console.log("4");

// Middleware
app.use(bodyParser.json());
app.use(cors());

const post = require("./routes/api/posts");
app.use("/api/posts", post);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port} port!`));
