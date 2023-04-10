const express = require("express")

const router = express.Router()

const postsController = require("../../../controllers/api/v1/api_getProducts")

router.get("/", postsController.index)
router.use("/delete", require("./delete"))
router.use("/create", require("./create"))

module.exports = router
