export const findAll = (req, res) => {
    try {
        res.send("Controller 'findAll' da rota 'router.get(/products)' acessada")
    } catch (error) {
        res.send({ message: "Erro", erro: error });
    }
};
