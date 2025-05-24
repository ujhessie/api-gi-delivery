import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  ImgUrl: { type: String, required: true },
  tenantId: {
    type: mongoose.Schema.Types.ObjectId, // Tipo do ID
    ref: "Tenant", // Vou referenciar mais tarde com o populate
    required: true, 
  },
});

const Product = mongoose.model("Product", ProductSchema)

export default Product;