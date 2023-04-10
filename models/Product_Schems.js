const mongoose = require("mongoose")

// Define a product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

// Create a product model
const Product = mongoose.model("Product", productSchema)

module.exports = Product
