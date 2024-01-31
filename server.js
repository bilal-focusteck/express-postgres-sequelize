const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const { PORT } = require("./src/config/config")

const app = express();

app.use(cors());

// Using cookie-parser middleware to parse cookies
app.use(cookieParser());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ status: 200, message: "Welcome to backend boilerplate" });
});
console.log("port is: ", PORT)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});