const dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var router = express.Router();
global.__basedir =process.env.PATH_DEVELOPMENT;

const users = require("./user.router");
const students = require("./student.router");
const img =require("./image.router");


router.use("/users", users);
router.use("/students", students);
router.use("/files", img);

router.use(express.static('static'))
router.use(express.static(__dirname + '/'));
module.exports = router;