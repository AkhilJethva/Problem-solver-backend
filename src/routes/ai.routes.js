const express  = require('express')

const { handlerFunction } = require('../controller/ai.controller')
const router = express.Router()

router.post("/get-review", handlerFunction)

module.exports = router