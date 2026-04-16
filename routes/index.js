var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("get /")
  res.send('hello!')
  next()
})

module.exports = router;
