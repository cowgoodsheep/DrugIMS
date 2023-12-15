
var express = require('express');
var {getMyRuku,getMyBuy,getKucun,getXiaoshou,getRuku}= require('../api/index');
var router = express.Router();
router.post('/getKucun', async(req, res, next) => {
  const {searchValue} = req.body
    const data =await getKucun(searchValue)
    res.json(data);
  });
  router.post('/getMyRuku', async(req, res, next) => {
    const {user_id,startDate,endDate} = req.body
      const data =await getMyRuku(user_id,startDate,endDate)
      res.json(data);
    });
  router.post('/getXiaoshou', async(req, res, next) => {
    const {searchValue} = req.body
    const data =await getXiaoshou(searchValue)
    res.json(data);
  });
  router.post('/getRuku', async(req, res, next) => {
    const {searchValue} = req.body
    const data =await getRuku(searchValue)
    res.json(data);
  });
  router.post('/getBuy', async(req, res, next) => {
    const {user_id,searchValue} = req.body
    const data =await getMyBuy(user_id,searchValue)
    res.json(data);
  });
  module.exports = router;