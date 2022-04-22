const express = require("express");
const router = express.Router();
const userController=require('../controller/user.controller')
router.post('/signup', (req, res) => {
    userController.signup(req.body)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  router.post('/signin', (req, res) => {
    userController.login(req.body)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
module.exports = router;