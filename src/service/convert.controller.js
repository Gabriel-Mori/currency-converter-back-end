import convertService from './convert.service'
// const { v4: uuidv4 } = require("uuid")

const convertMoney = async (req, res) => {
  try {
    const body = req.body

    // fromCurrency = FRONT MANDAR QUAL A MOEDA
    // toCurrency = FRONT MANDAR PARA QUAL A MOEDA DEVERÁ SER CONVERTIDA
    // amount = FRONT MANDAR A QUANTIDADE
    const result = await convertService.convertMoney({
      fromCurrency: body.fromCurrency,
      toCurrency: body.toCurrency,
      amount: body.amount,
    })

    // APÓS O RESULTADO  PODERÁ SALVAR NO DB AS INFOS :
    // SEMPRE CRIAR UM NOVO DOC TODA VEZ
    // {
    //   id: uuidv4(),
    //   user: gabriel@hotamil.com SOLICITAR NO FRONT O EMAIL DO CARA OU ALGO QUE POSSA IDENTIFICAR ELE NO BANCO,
    //   fromCurrency,
    //   toCurrency,
    //   amount,
    //   createdAt: new Date()
    // }

    // MANDA PARA O DB AS INFO E RETORNA PARA O FRONT O RESULT

    return res.json(result)
  } catch (error) {
    return res.status(500).json({ message: error?.message })
  }
}

module.exports = { convertMoney }