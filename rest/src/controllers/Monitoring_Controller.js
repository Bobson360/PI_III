'use strict'

const repository = require('../repositories/Monitoring_Repository')

/**
 *      INICIA UM NOVO BANHO
 */
exports.post = async (req, res, next) => {
    try {
        var data = await repository.create(req.body)
        console.log(res.body)
        res.status(200).send({
            message: 'Banho iniciado'
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}

/**
 *      RECUPERA DADOS DO ULTIMO DO BANHO
 */
exports.get = async (req, res, next) => {
    console.log(res)
    try {
        var data = await repository.get(req.params.id)
        // console.log(data[data.length - 1])
        res.status(200).send(data[data.length - 1])
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}

/**
 *      RECUPERA TODOS OS USUÁRIOS
 */
exports.getAllUsers = async (req, res, next) => {
    let allUsers = []
    try {
        var data = await repository.getAllUsers()
        for(var i = 0; i < data.length; i++){
            console.log('documento')
            console.log(data[i].user)
            allUsers.push(data[i].user)
        }
        console.log(allUsers)
        res.status(200).send({
            id: data[data.length - 1].id, 
            name: data[data.length - 1].user
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao recuperar usuários"
        })
    }
}

/**
 *      ATUALIZA COM OS DADOS DO BANHO
 */
exports.put = async (req, res, next) => {
    console.log('controller put')
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({
            message: 'Atualizado com sucesso'
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}

/**
 *      FINALIZA O BANHO
 */
exports.endShower = async (req, res, next) => {
    console.log('controller endShower')
    try {
        await repository.endShower(req.params.id, Date())
        res.status(200).send({
            message: 'Banho finalizado com sucesso'
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}