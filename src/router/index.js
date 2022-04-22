var express = require('express');
var router = express.Router();

const users = require("./user.router");
const students = require("./student.router");

router.use("/users", users);
router.use("/students", students);

module.exports = router;