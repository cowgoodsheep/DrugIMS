
var express = require('express');
var {repairUserInfo,getAllUser,deleteUser,repairUser}= require('../api/index');
var router = express.Router();
router.post('/setUserInfo', async(req, res, next) => {
    const {username,password,contact_info,address,targetId} = req.body;
    const data =await repairUserInfo(username,password,contact_info,address,targetId)
    res.json(data);
  });
  router.post('/getAllUser', async(req, res, next) => {
    const {searchValue} = req.body
    const data =await getAllUser(searchValue)
    res.json(data);
  });
  router.post('/deleteUser', async(req, res, next) => {
    const {user_id} = req.body
    const data =await deleteUser(user_id)
    res.json(data);
  });
  router.post('/repairUser', async(req, res, next) => {
    const {username,password,role,contact_info,address,user_id} = req.body
    const data =await repairUser(username,password,role,contact_info,address,user_id)
    res.json(data);
  });
  module.exports = router;