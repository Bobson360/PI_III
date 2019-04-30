'use strict'

const express       =   require('express')
const router        =   express.Router()

const controller    = require('../controllers/user_controller')

router.post('/newUser',   controller.post)

module.exports = router