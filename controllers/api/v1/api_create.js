const Product = require("../../../models/Product_Schems")

module.exports.create = async function (req, res) {
  console.log(req.body)
  try {
    const { name, quantity } = req.body

    // validate input fields
    if (!name || !quantity) {
      return res
        .status(400)
        .json({ message: "Please provide name and quantity" })
    }

    // create new product document
    const product = new Product({
      name: name,
      quantity: quantity,
    })

    // save product to database
    await product.save()

    // return success response with created product object
    return res
      .status(201)
      .json({ message: "Product created successfully", product: product })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Internal server error" })
  }
}
