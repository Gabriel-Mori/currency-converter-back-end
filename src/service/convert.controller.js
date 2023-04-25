const { Request, Response } = require('express')
const ConvertService = require('./convert.service')


class ConvertController {
  async convertCDNLogsToAgoraFormat(req, res) {
    try {
      const body = req.body
      const result = await ConvertService.convertCDNLogsToAgoraFormat(body)

      return res.json(result)
    }
    catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
module.exports = new ConvertController()