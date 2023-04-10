// import Product model
const Product = require("../../../models/Product_Schems")

// define delete function
module.exports.delete = async function (req, res) {
  console.log(req.params.id)
  try {
    // find the product by its id
    let product = await Product.findById(req.params.id)
    console.log(product)

    // delete the product
    await product.deleteOne()

    // return success response with message
    return res.status(200).json({ message: "deleted successfully" })
  } catch (err) {
    console.log(err)

    // return error response with message
    return res.status(500).json({ message: "internal server error" })
  }
}
