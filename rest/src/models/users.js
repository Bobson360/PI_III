'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    // id:{
    //     //type: String,
    //     //required: true,
    //     //unique: true
    // },
    name:{
        type: String,    // nome do usuario
        required:true,   // obrigatorio 
        // unique:true
    // },
    // lastName:{
    //     type:String,
    // },
    // yearBirth:{
    //     type:Number,
    //     //required:true
    // },
    // monthBirth:{
    //     type:Number,
    //     //required:true
    // },
    // dayBirth:{ 
    //     type:Number,
    //     //required:true
    // },
    // sex:{
    //     type:String
    // },
    // height:{
    //     type:Number
    // },
    // admin:{
    //     type: Boolean,  // verdadeiro ou falso
    //     //required: true  // obrigatorio 
    }
  

})

module.exports = mongoose.model('User', schema) // exporta o modelo com nome 'User'