export default function prodModel(sequelize, DataTypes) {
  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.TEXT,
    },
  });

  return Product;
}
