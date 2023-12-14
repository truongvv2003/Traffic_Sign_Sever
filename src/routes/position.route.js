const express = require("express");
const router = express.Router();
const positionController = require('../controllers/api/position.controller')

router.get('/all-position-id', positionController.getListPositionById)
router.get('/create-position', positionController.createPosition)

module.exports = router