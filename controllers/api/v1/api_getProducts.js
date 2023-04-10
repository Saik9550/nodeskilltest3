const Product = require("../../../models/Product_Schems")

module.exports.index = async function (req, res) {
  let products = await Product.find({}).select("_id quantity name ")

  //   console.log(products)
  return res.status(200).json({
    data: {
      products: products,
    },
  })
}
