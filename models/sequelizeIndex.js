import dotenv from "dotenv";
dotenv.config();
import config from "../utils/config.js";
import { Sequelize, DataTypes } from "sequelize";
import prodModel from "./prodModel.js";
import reviewModel from "./revModel.js";

export const sequelize = new Sequelize(
  config.DB,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected sequelize to phpmyadmin");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
//Database initialization
db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.products = prodModel(sequelize, DataTypes);
db.reviews = reviewModel(sequelize, DataTypes);

//building relation
db.products.hasMany(db.reviews, {
  foreignKey: "product_id",
  as: "review",
});
db.reviews.belongsTo(db.products, {
  foreignKey: "product_id",
  as: "product",
});
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});

export default db;
