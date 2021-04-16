const express = require("express");
const { modelTodo } = require("./model");
const { Service } = require("./service");

const router = express.Router();

exports.todoRouter = (sequelize) => {
  // Le model de base de données
  const TODO = modelTodo(sequelize);

  // Le service metier
  const service = Service(TODO);

  router
    .route("/")
    .get((req, rep) => {
      service.findAll().then((todos) => rep.json(todos));
    })
    .post((req, rep) => {
      service.create(req.body).then((todo) => rep.json(todo));
    })
    .patch((req, rep) => {
      service.patch(req.body).then((todo) => rep.json(todo));
    })
    ;
    router.delete('/:id',(req, rep) => {
      service.destroy(req.params.id).then(() => rep.status(200).json({message:"OK"}))
    })

  return router;
};
