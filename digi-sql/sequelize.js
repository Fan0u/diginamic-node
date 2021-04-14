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
  await USER.create({ nom: "marin", isAdmin: false });
  const users = await USER.findAll({where : Sequelize.or({isAdmin : true}, {nom:'marin'})});
  users.forEach(user => console.log(user.dataValues))
});
