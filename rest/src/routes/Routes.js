'use strict'

const express       =   require('express')
const router        =   express.Router()

const controller    = require('../controllers/Monitoring_Controller')

// router.post('/', (req, res, next) => {
//     res.status(201).send(req.body)
// })

// router.put('/:id', (req, res, next) => {
//     const id = req.params.id
//     res.status(201).send({
//         id: id,
//         name: req.body
//     })
// })

router.get('/:id', controller.get)
router.put('/:id', controller.put)
router.post('/',   controller.post)
router.put('/end/:id', controller.endShower)

module.exports = router