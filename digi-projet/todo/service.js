exports.Service = (MODEL) => {
  const create = async (todo) => {
    return await MODEL.create(todo);
  };
  const findAll = async () => {
    return await MODEL.findAll();
  };
  const patch = async (todo) => {
    console.log("path", todo);
    await MODEL.update(todo, { where: { id: todo.id } });
    return MODEL.findByPk(todo.id)
  };
  const destroy = async (id) => {
    return await MODEL.destroy({ where: { id } });
  };
  return { create, findAll, patch, destroy };
};
