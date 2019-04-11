'use strict'

const express       =   require('express')
const bodyParser    =   require('body-parser')

const app           =   express()
const router        =   express.Router()


// Carregar as rotas
const index = require('./routes/index')
const sensorRoute = require('./routes/prodRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/', index)
app.use('/sensors', sensorRoute)


module.exports  =   app