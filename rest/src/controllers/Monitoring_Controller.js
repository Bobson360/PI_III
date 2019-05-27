'use strict'

const repository = require('../repositories/Monitoring_Repository')

/**
 *      INICIA UM NOVO BANHO
 */
exports.post = async (req, res, next) => {
    try {
        var data = await repository.create(req.body)
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
    try {
        var data = await repository.get(req.params.id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
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