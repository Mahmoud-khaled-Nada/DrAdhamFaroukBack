const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthControl/AuthController');

/* GET index auth. */
router.get('/', AuthController.fetchAll);
  

module.exports = router;
