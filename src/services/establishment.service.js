import Establishment from "../models/Establishment.js";

export const createEstablishmentService = (body) => Establishment.create(body);

export const findAllEstablishmentService = () =>
  Establishment.find().select("-password").sort({ _id: -1 });

export const findByIdEstablishmentService = (id) =>
  Establishment.findById(id).select("-password");

export const updateEstablishimentService = (id, name, username, password) =>
  Establishment.findByIdAndUpdate(
    { _id: id },
    { name, username, password },
    { rawResult: true }
  ).select("-password");

export const deleteEstablishment = (id) =>
  Establishment.findOneAndDelete({ _id: id }).select("-password");
