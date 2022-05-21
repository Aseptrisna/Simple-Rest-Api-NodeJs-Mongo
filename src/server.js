require("dotenv").config();
const express = require("express");
const mongo = require("./config/database");
const app = express();
const routes = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static'))
app.use(express.static(process.env.PATH_DEVELOPMENT));
app.use(routes)
module.exports = app;