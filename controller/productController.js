import db from "../models/sequelizeIndex.js";
export const addProduct = async (req, res) => {
  let data = req.body;
  await db.products.create(data);
  res.status(200).send("product added succesfully");
};

export const getProducts = async (req, res) => {
  const data = await db.products.findAll({
    attributes: ["id", "title", "price"],
  });
  res.status(200).json({ products: data });
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;
  const data = await db.products.findOne({ where: { id: id } });
  res.json({ data: data });
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;
  await db.products.update(req.body, { where: { id: id } });
  const data = await db.products.findAll({});
  res.json({ updatedData: data });
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  await db.products.destroy({ where: { id: id } });
  const data = await db.products.findAll({});
  res.json({ LatestdData: data });
};

export const getProductsReviews = async (req, res) => {
  const { id } = req.params;
  const data = await db.products.findAll({
    attributes: ["title", "price"],
    include: [
      {
        model: db.reviews,
        as: "review",
      },
    ],
  });
  res.json({ data: data });
};
