//File Added by Nirmal
var express = require('express');
var router = express.Router();

/* GET greeting. */
router.get('/sayhello', function(req, res, next) {
  res.send('Hello from Micro Service on Node JS - Express Framework');
});

module.exports = router;
