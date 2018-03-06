var express = require('express');
var request = require('request-promise');
var router = express.Router();

router.post('/', async (req, res, next) => {
  console.log(typeof req.body);
  if(req.body && req.query)
		return res.send('reponse simple');
});

module.exports = router;
