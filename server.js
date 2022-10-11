const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const server = express();

server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.send("Hello World! This is my application with nodejs!!");
});

const port = process.env.APP_PORT || 8082;

server.listen(port, () =>
  console.log(`Application is running on port ${port}!`)
);
