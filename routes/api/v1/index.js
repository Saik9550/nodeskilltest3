const express = require("express")

const router = express.Router()

const updateController = require("../../../controllers/api/v1/api_update")

router.use("/products", require("./posts"))

router.post("/products/:id/update_quantity", updateController.updateQuantity)

module.exports = router
