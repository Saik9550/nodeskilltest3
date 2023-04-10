const express = require("express")

const router = express.Router()

const createProduct = require("../../../controllers/api/v1/api_create")

router.post("", createProduct.create)

module.exports = router
