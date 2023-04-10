const express = require("express")

const router = express.Router()

const deleteProduct = require("../../../controllers/api/v1/api_deleteproduct")

router.delete("/:id", deleteProduct.delete)

module.exports = router
