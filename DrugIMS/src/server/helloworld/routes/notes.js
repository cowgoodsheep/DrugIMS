var express = require('express');
var {getAllNotes,updateNote,deleteNote,addNote,queryNote}= require('../api/index');

var router = express.Router();
/* GET users listing. */
router.get('/all', async(req, res, next) => {
  const data =await getAllNotes()
  res.json(data);
});
router.post('/update', async(req, res, next) => {
  const {key,newDetail} = req.body;
  const result = await updateNote(key,newDetail)
  res.send(result);
});
router.get('/delete/:key', async(req, res, next) => {
  const key = req.params.key;
  const result = await deleteNote(key)
  res.send(result);
});
router.post('/add', async(req, res, next) => {
  const {key,title,label} = req.body;
  const result = await addNote(key,title,label)
  res.send(result);
});
router.post('/query', async(req, res, next) => {
  const {keyword} = req.body;
  const result = await queryNote(keyword)
  res.send(result);
});


module.exports = router;
