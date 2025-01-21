import mongoose from "mongoose";
import {
    createProductService,
    findAllService,
    findByIdService,
    updateService,
    ereaseService,
} from "../services/product.service.js";

export const create = async (req, res) => {
    try {
        const { name, price, imgUrl } = req.body;

        if (!name || !price || !imgUrl) {
            return res
                .status(400)
                .send({ message: "Submmit all filds for registration" });
        }

        await createProductService({ name, price, imgUrl });

        res.status(200).send({
            message: "produto adicionado com sucesso",
            product: { name, price, imgUrl },
        });
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};

export const findAll = async (req, res) => {
    try {
        const products = await findAllService();

        res.status(200).send(products);
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};

export const findById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await findByIdService(id);

        res.status(200).send(product);
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, price, imgUrl } = req.body;

        // vale a pena criar um middleware para isto?
        if (!name || !price || !imgUrl || !id) {
            return res.status(400).send("Submmit all fields for update");
        }

        const oldProduct = await findByIdService(id);

        await updateService(id, name, price, imgUrl);

        const updatedProduct = await findByIdService(id);

        res.status(200).send({
            message: "Product updated successfull",
            oldProduct,
            updatedProduct,
        });
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};

export const erease = async (req, res) => {
    try {
        const { id } = req.params;

        const oldProduct = await findByIdService(id);

        await ereaseService(id);

        res.status(200).send({
            message: "Product deleted successfull",
            oldProduct,
        });
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};
