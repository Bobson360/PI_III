'use strict'

const repository = require('../repositories/user_repository')

/**
 *      CRIA UM NOVO USUÁRIO
 */
exports.post = async (req, res, next) => {
    try {
        var data = await repository.create(req.body)
        res.status(200).send({
            message: 'USUÁRIO CRIADO COM SUCESSO'
        })
    } catch (e) {
        res.status(500).send({
            message: "FALHA AO CRIAR USUÁRIO"
        })
    }
}