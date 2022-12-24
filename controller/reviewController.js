import db from "../models/sequelizeIndex.js";
export const addReview = async (req, res) => {
  let data = req.body;
  await db.reviews.create(data);
  res.status(200).send("review added succesfully");
};

export const getAllReview = async (req, res) => {
  const data = await db.reviews.findAll({});

  res.status(200).json({ reviews: data });
};

export const getReviewsById = async (req, res) => {
  const { id } = req.params;
  const data = await db.reviews.findOne({ where: { id: id } });
  res.json({ data: data });
};

export const updateReviewById = async (req, res) => {
  const { id } = req.params;
  await db.products.update(req.body, { where: { id: id } });
  const data = await db.reviews.findAll({});
  res.json({ updatedData: data });
};

export const deleteReviewsById = async (req, res) => {
  const { id } = req.params;
  await db.reviews.destroy({ where: { id: id } });
  const data = await db.products.findAll({});
  res.json({ LatestdData: data });
};
