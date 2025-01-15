import Product from "../models/products.js";

export const findAllService = () => Product.find();
export const createProductService = (body) => Product.create(body);

export const findByIdService = (id) => Product.findById(id)