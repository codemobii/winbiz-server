const productModel = require("../models/product.model");

// Create and Save a new Product
exports.create = (request, response) => {
  const user = new productModel({
    title: request.body.title,
    price: request.body.price,
    desc: request.body.desc,
    previews: request.body.previews,
  });
  user
    .save()
    .then((result) => {
      response.status(200).send({
        message: "Product/Program added successfully",
        status: true,
      });
    })
    .catch((error) => {
      response.status(500).send({
        message: "Error creating user",
        status: false,
        error,
      });
    });
};

// Edit product / Prgoramme

exports.update = (request, response) => {
  // Find note and update it with the request body
  productModel
    .findByIdAndUpdate(
      request.params.id,
      {
        title: request.body.title,
        price: request.body.price,
        desc: request.body.desc,
        disabled: request.body.disabled || false,
      },
      { new: true }
    )
    .then((product) => {
      if (!product) {
        return response.status(404).send({
          message: "Product not found with id " + request.params.id,
          status: false,
        });
      }

      //   return success response
      response.status(200).send({
        message: "Product / Programme updated successfully",
        status: false,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return response.status(404).send({
          message: "Product not found with id " + request.params.id,
          err,
          status: false,
        });
      }
      return response.status(500).send({
        message: "Error updating product with id " + request.params.id,
        err,
        status: false,
      });
    });
};

// Get products and programmes

exports.getProducts = (request, response) => {
  productModel
    .find({ disabled: false })
    .then((product) => {
      //   return success response
      response.status(200).send(product);
    })
    .catch((err) => {
      response.status(500).send({
        message: "Some error occurred while retrieving products / programmes.",
        err,
        status: false,
      });
    });
};
