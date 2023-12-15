var express = require('express');
var {register,login,repairUserInfo}= require('../api/index');
var router = express.Router();
router.post('/register', async(req, res, next) => {
    const {username,password,role} = req.body;
    const data =await register(username,password,role)
    console.log(data)
    res.json(data);
  });
  router.post('/login', async(req, res, next) => {
    const {username,password} = req.body;
    const data =await login(username,password)
    res.json(data);
  });


  module.exports = router;