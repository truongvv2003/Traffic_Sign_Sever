const express = require("express");
const router = express.Router();
const userController = require('../controllers/api/user.controller')

router.get('/all-user', userController.getListUser)
router.get('/:id', userController.getUserById)

module.exports = router