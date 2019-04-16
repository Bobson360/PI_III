'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    user:{
        type: String,   // nome do usuario
        required:true
    },

    data:{
       timeIN:{
            type: Date,
            required: true,
            default: Date.now   // data inicio do banho
       },
       sensors: [
                    {
                        tempIN:  Number,    // temperatura de entrada da agua
                        tempOUT: Number,    // temperatura de saida da agua
                        vol:     Number,    // volume em litros entre as medições
                        time:    Number     // tempo em segundos entre as medições
                    }
                ]
        },
        timeOUT:{
            type: Date,
            required: true,
            default: Date.now   // data final do banho
        }
})

module.exports = mongoose.model('Shower', schema)