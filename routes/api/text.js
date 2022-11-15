const express = require("express");
const router = express.Router();
const textController = require("../../controller/textController")

router.route("/").get(textController.getText).post(textController.postText)

module.exports = router