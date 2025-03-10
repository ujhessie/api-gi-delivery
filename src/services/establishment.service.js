import Establishment from "../models/Establishment.js";

export const createEstablishmentService = (body) => Establishment.create(body);

export const findAllEstablishmentService = () =>
  Establishment.find().sort({ _id: -1 });

export const findByIdEstablishmentService = (id) => Establishment.findById(id);

export const updateEstablishimentService = (id, name, username) =>
  Establishment.findByIdAndUpdate(
    { _id: id },
    { name, username },
    { rawResult: true }
  );

export const deleteEstablishment = (id) =>
  Establishment.findOneAndDelete({ _id: id });


// export const ereaseService = (id) => Product.findOneAndDelete({ _id: id });
