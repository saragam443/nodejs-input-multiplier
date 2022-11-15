require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connetDB = require("./config/dbConnect");
const TextDB = require("./model/TextDB");
const port = process.env.PORT || 3800;

connetDB();

app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/", require("./routes/root"))

app.use("/api/text", require("./routes/api/text"))

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "404.html"));
});

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(port, () => console.log("Server is listening on port: ", port));
});
