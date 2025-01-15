import mongoose from "mongoose";
import {
    createProductService,
    findAllService,
    findByIdService,
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

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID Inválido" });
        }

        const product = await findByIdService(id);

        res.status(200).send(product);
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};
