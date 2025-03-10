import {
  createEstablishmentService,
  findAllEstablishmentService,
  findByIdEstablishmentService,
  updateEstablishimentService,
  deleteEstablishment,
} from "../services/establishment.service.js";

export const createEstablishment = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).send({
        message:
          "Por favor, envie um nome e username válido. O username deve ser único.",
      });
    }

    // TODO -> Validar nome de estabelecimento. Este nome já existe no banco de dados? Se sim retornar um 400

    await createEstablishmentService({ name, username });

    res
      .status(200)
      .send({ message: `Estabelecimento '${name}' criado com sucesso!` });
  } catch (error) {
    res.status.send({ error: error.message });
  }
};

export const findAllEstablishment = async (req, res) => {
  try {
    const Establishments = await findAllEstablishmentService();

    res.send({ Establishments: Establishments });
  } catch (error) {
    res.status(400).send({ message: "Erro!", message: error.message });
  }
};

export const findByIdEstablishment = async (req, res) => {
  try {
    const { id } = req.params;

    const establishment = await findByIdEstablishmentService(id);

    res.status(200).send(establishment);
  } catch (error) {
    res.status(400).send({ message: "error", error: error.message });
  }
};

export const updateEstablishment = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res
        .status(400)
        .send("Tá faltando algum campo aí. Envie o name e o username.");
    }

    const oldEstablisment = await findByIdEstablishmentService(id);

    const newEstablishment = await updateEstablishimentService(
      id,
      name,
      username,
      password
    );

    res.status(200).send({
      message: "Estabelecimento atualizado com sucesso",
      oldVersion: oldEstablisment,
      newVersion: newEstablishment,
    });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Deu erro o bagulho aqui ó", error: error.message });
  }
};

export const ereaseEstablishment = async (req, res) => {
  try {
    const { id } = req.params;

    const establishment = await findByIdEstablishmentService(id);

    if (!establishment) {
      return res
        .status(400)
        .send("Não foi possível localizar este estabelecimento");
    }

    await deleteEstablishment(id);

    res.status(200).send({
      message: "Estabelecimento deletado",
      establishment: establishment,
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao tentar deletar o estabelecimento",
      error: error.message,
    });
  }
};
