'use strict'
const mongoose = require('mongoose')
const Shower = mongoose.model('Shower')

exports.create = async(data) => {
    var shower = new Shower(data)
    await shower.save()
}