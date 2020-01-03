const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//Load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
