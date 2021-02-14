const userModel = require("../models/user.model");

// Get user
exports.getUser = (request, response) => {
  userModel
    .findOne({email: request.query.email})
    .then((user) => {
      //   return success response
      response.status(200).send(user);
    })
    .catch((err) => {
      response.status(500).send({
        message: "Some error occurred while getting user.",
        err,
        status: false,
      });
    });
};

// Create user

exports.create = (request, response) => {
  const user = new userModel({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    addresses: request.body.addresses,
    country: request.body.country,
    state: request.body.state,
    zipCode: request.body.zipCode,
  });
  user
    .save()
    .then((result) => {
      response.status(200).send({
        message: "User added successfully",
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
