const express = require("express");
const router = express.Router();
const signController = require('../controllers/api/sign.controller')

router.get('/all-sign', signController)

module.exports = router