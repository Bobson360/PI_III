'use strict'

const express       =   require('express')
const router        =   express.Router()

router.post('/', (req, res, next) => {
    res.status(201).send(req.body)
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        name: req.body
    })
})

module.exports = router