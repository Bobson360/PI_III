'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    user:{
        type: String,   // nome do usuario
        required:true   // obrigatorio 
    },

    
    timeIN:{
        type: Date,         // tipo data [  inserir via parametros  ]
        required: false,    // não obrigatorio
        default: Date.now   // data inicio do banho 
    },

    sensors: [
                {
                    tempIN:   Number,    // temperatura de entrada da agua
                    tempOUT:  Number,    // temperatura de saida da agua
                    vol:      Number,    // volume em litros entre as medições
                    time:     Number,    // tempo em segundos entre as medições
                    potencia: Number     // potencia consumida no periodo
                }
            ],

    timeOUT:{
        type: Date,
        required: false,
        // default: Date.now   // data final do banho
    }
})

module.exports = mongoose.model('Shower', schema) // exporta o modelo com nome 'Shower'