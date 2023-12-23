
var express = require('express');
var {getValue,getMax,getAllDrug,addDrug,buyDrug,jinhuo,repairDrug,deleteDrug}= require('../api/index');
var router = express.Router();
router.post('/getAll', async(req, res, next) => {
    const {searchValue} = req.body
  const data =await getAllDrug(searchValue)
    res.json(data);
  });
  router.post('/addDrug', async(req, res, next) => {
    const {img,drug_name, drug_description, manufacturer, unit, specification, stock_lower_limit, stock_upper_limit, price} = req.body
  const data =await addDrug(img,drug_name, drug_description, manufacturer, unit, specification, stock_lower_limit, stock_upper_limit, price)
    res.json(data);
  });
  router.post('/repairDrug', async(req, res, next) => {
    const {img,stock_lower_limit,stock_upper_limit,price,drug_description,drug_id} = req.body
  const data =await repairDrug(img,stock_lower_limit,stock_upper_limit,price,drug_description,drug_id)
    res.json(data);
  });
  router.post('/deleteDrug', async(req, res, next) => {
    const {drug_id} = req.body
  const data =await deleteDrug(drug_id)
    res.json(data);
  });
  router.post('/getMax', async(req, res, next) => {
    const {drug_id} = req.body
  const data =await getMax(drug_id)
    res.json(data);
  });
  router.post('/getValue', async(req, res, next) => {
    const {drug_id} = req.body
  const data =await getValue(drug_id)
    res.json(data);
  });
  router.post('/jinhuo', async(req, res, next) => {
    const {drug_id, batch_number,production_date,purchase_unit_price,remaining_quantity,user_id,note,} = req.body
    const data =await jinhuo(drug_id, batch_number,production_date,purchase_unit_price,remaining_quantity,user_id,note)
    res.json(data);
  });
  router.post('/buyDrug', async(req, res, next) => {
    const {drug_id, user_id, sales_quantity, sales_unit_price} = req.body
  const data =await buyDrug(drug_id, user_id, sales_quantity, sales_unit_price)
    res.json(data);
  });
  module.exports = router;