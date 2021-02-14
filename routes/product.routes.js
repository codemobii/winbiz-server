module.exports = (app) => {
  const product = require("../controllers/product.controller");

  // Create product / programme
  app.post("/addProduct", product.create);

  // Edit product (also handles disabling product => delete)
  app.put("/editProduct/:id", product.update);

  // Get all the products / programmes
  app.get("/getProducts", product.getProducts);
};
