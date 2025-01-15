import mongoose from "mongoose";
import {
    createProductService,
    findAllService,
    findByIdService,
    updateService,
    ereaseService
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

export const update = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, price, imgUrl } = req.body;

        if (!name || !price || !imgUrl || !id) {
            return res.status(400).send("Submmit all fields for update");
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            // Verificando se o id é um id válido
            return res.status(400).send();
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

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Submmit a valid ID");
        }

        const oldProduct = await findByIdService(id);

        await ereaseService(id);


        res.status(200).send("Product deleted successfull");
    } catch (error) {
        res.send({ message: "Erro", erro: error.message });
    }
};
