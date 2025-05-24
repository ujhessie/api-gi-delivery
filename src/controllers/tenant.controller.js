import {
  createTenantService,
  findAllTenantsService,
} from "../services/tenant.service.js";

export const create = async (req, res) => {
  try {
    const { name } = req.body;

    // validando o name na requisição
    if (!name) {
      return res
        .status(400)
        .send({ message: "Envie todos os campos necessários" });
    }

    await createTenantService({ name });

    res.send({ message: "Tenant adicionado com sucesso", name });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao tentar criar novo tenant",
      error: error.message,
    });
  }
};

export const findAll = async (req, res) => {
  try {
    const tenants = await findAllTenantsService();
    res.status(200).send(tenants);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao buscar tenants", error: error.message });
  }
};

export const findById = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(400).send({message: "", error: error.message})
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { name } = req.body;

    //validando a busca e requisição
    if (!name | !id) {
      return res
        .status(400)
        .send({ message: "Envie todos os campos necessários" });
    }

    const oldTenant = await findByIdService(id);
  } catch (error) {
    res.status(400).send({
      message: "Erro ao tentar atualizar este tenant",
      error: error.message,
    });
  }
};
