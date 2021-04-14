const { Model, DataTypes } = require("sequelize");

class LIVRE extends Model {}

exports.modelLivre = (sequelize) => {
  LIVRE.init(
    {
      titre: DataTypes.STRING,
      auteur: DataTypes.STRING,
    },
    { sequelize }
  );
  return LIVRE;
};
