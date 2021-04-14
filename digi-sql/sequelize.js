const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:user.db");

class USER extends Model {}

USER.init(
  {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    telephone: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  },
  { sequelize }
);

sequelize.sync({ alter: true }).then(async () => {
  await USER.create({ nom: "mauny", isAdmin: true });
  const user = await USER.findByPk(2);
  console.log('user : ', user.dataValues)
});
