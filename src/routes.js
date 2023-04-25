const { Router } = require('express')
const { request, response } = require('./routes')
const convertController = require('./service/convert.controller')

const routes = Router()

// Convert Routes
routes.get('/', convertController.convertCDNLogsToAgoraFormat)

module.exports = routes