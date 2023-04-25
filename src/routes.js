const { Router } = require("express")
import convertController from './service/convert.controller'

const routes = Router()


routes.post("/convert", convertController.convertMoney)
// routes.get("/history", convertController.getHistory) FAZER A SERVICE PARA OBTER O HISTORICO NO DB

module.exports = routes