const { Model, DataTypes } = require("sequelize");

class TODO extends Model {}

exports.modelTodo = (sequelize) => {
  TODO.init(
    {
      description: DataTypes.STRING,
      done: DataTypes.BOOLEAN
    },
    { sequelize }
  );
  return TODO;
};
