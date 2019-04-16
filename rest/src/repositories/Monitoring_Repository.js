'use strict'
const mongoose = require('mongoose')
const Shower = mongoose.model('Shower')


exports.get = async(id) => {
    console.log(id)
    const shower = await Shower
    .findById({
        _id:id
        // 'user':'robson'
    })
    return shower
}

exports.getBySlug = async(slug) => {
    const res = await Product
    .findOne({
        slug: slug,
        active: true
    }, 'title price slug price tags')
    return res
}

exports.getById = async(id) => {
    const res = await Product
    .findById(id)
    return res
}



exports.create = async(data) => {
    console.log('metodo create')
    var shower = new Shower(data)
    await shower.save()
}

exports.update = async(id, data) => {
    console.log('repository update ')
    await Shower.findByIdAndUpdate(id, {
        $push:{
            sensors: [
                {
                    tempIN:  data.tempIN,     // temperatura de entrada da agua
                    tempOUT: data.tempOUT,    // temperatura de saida da agua
                    vol:     data.vol,        // volume em litros entre as medições
                    time:    data.time        // tempo em segundos desde a ultima atualização
                }
            ]
        }
    })
}

exports.endShower = async(id, data) => {
    console.log(`repository endShower id ${id} e data ${data}`)
    await Shower.findByIdAndUpdate(id, {
        $set:{ timeOUT:data }
    })
}
    


exports.delete = async(id) => {
    await Product.findOneAndRemove(id)
}