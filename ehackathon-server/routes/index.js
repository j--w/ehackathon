var express = require('express');
var router = express.Router();
var ensureAuthenticated = require('../middleware/ensureAuthenticated');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'eHackathon' });
});

module.exports = router;
