const express = require('express');
const router = express.Router();

/* GET index listing. */
router.get('/', function (req, res, next) {
  res.send('Hello index => Nada');
});


module.exports = router;
