const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));

// Get MongoDB driver connection
const dbo = require("/Users/srishtinagraj/myProject/server/db/conn.js");

// Perform a database connection when server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to MongoDB");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
