import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  titile: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

const EstablishmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true }, // A opção de 'unique' serve para informar que o campo deve ser único no banco de dados. E como eu posso tratar a validação dessa configuração?
  products: [ProductSchema],
});

const Establishment = mongoose.model("Establishment", EstablishmentSchema);

export default Establishment;
