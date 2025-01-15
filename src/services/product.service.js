import Product from "../models/products.js";

export const findAllService = () => Product.find().sort({ _id: -1 });

export const createProductService = (body) => Product.create(body);

export const findByIdService = (id) => Product.findById(id);

export const updateService = (id, name, price, imgUrl) =>
    Product.findByIdAndUpdate(
        { _id: id },
        { name, price, imgUrl },
        { rawResult: true }
    );

export const ereaseService = (id) => Product.findOneAndDelete({ _id: id });
