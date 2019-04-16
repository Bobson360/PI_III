'use strict'

const mongoose = require('mongoose')

const Shower = mongoose.model('Shower')

exports.start_monitoring = (req, res, next) => {
    console.log("entrou na função")
    var shower = new Shower(req.body)
    shower.save().then(x => {
        res.status(201).send({
            message: 'inserido com sucesso'
        })
    }).catch(e => {
        res.status(400).send({
            message: 'falhou',
            data: e
        })
    })
}