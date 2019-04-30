'use strict'

const express       =   require('express')
const router        =   express.Router()

const controller    = require('../controllers/Monitoring_Controller')


router.get('/:id', controller.get)
router.get('/get/users', controller.getAllUsers)
router.put('/:id', controller.put)
router.post('/startShower',   controller.post)
router.put('/end/:id', controller.endShower)

module.exports = router