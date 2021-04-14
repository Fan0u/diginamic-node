const { Model, DataTypes } = require("sequelize");

class USER extends Model {}

exports.modelUser = (sequelize) => {
  USER.init(
    {
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      telephone: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    { sequelize }
  );
  return USER;
};
