export default function reviewScema(sequelize, DataTypes) {
  const Review = sequelize.define("review", {
    ratings: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.TEXT,
    },
    ofproduct: {
      type: DataTypes.INTEGER,
      ref: "products",
    },
  });
  return Review;
}
