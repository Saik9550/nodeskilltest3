// productsController.js

const Product = require("../../../models/Product_Schems")

// update the quantity of product by id and and number query passed in the url
exports.updateQuantity = async (req, res) => {
  const productId = req.params.id

  //   convert the number query into int
  const quantity = parseInt(req.query.number)

  //   vlidate whether product id is present
  if (!productId || isNaN(quantity)) {
    return res.status(400).json({ message: "Invalid parameters" })
  }

  try {
    const product = await Product.findById(productId)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    product.quantity += quantity
    await product.save()

    return res
      .status(200)
      .json({ data: { product, message: "Quantity updated Succesfully" } })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Internal server error" })
  }
}
