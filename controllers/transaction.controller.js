var axios = require("axios");
const transactionModel = require("../models/transaction.model");
const { useEmail } = require("../helpers/email.helper");

const { sendEmail } = useEmail();

// Create and Save a new Product
exports.verify = (request, response) => {
  var options = {
    method: "GET",
    url: `https://api.flutterwave.com/v3/transactions/${request.body.transactionId}/verify`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer FLWSECK_TEST-9da1f2791ff008f261f6f37ff63c85e7-X",
    },
  };
  axios(options)
    .then((res) => {
      const transaction = new transactionModel({
        user: request.body.user,
        product: request.body.product,
        flutterRef: request.body.flutterRef,
        status: res.data.status,
      });

      transaction.save().then((tnx) => {
        sendEmail(
          "colourjim@gmail.com",
          "New Payment (Winbiz)",
          `A new payment has been issued on Winbiz, click on the button below to view details.`,
          true
        );

        sendEmail(
          request.body.user.email,
          "Payment Confirmation",
          `Your payment for ${request.body.product.title} was successful. Thank you for using Winbiz.`,
          false
        );

        response.status(200).send({
          message: "Transaction was successful",
          status: true,
        });
      });
    })
    .catch((er) => {
      response.status(404).send({
        message: "Something went wrong",
        er,
        status: false,
      });
      console.log(request.body.transactionId);
    });
};
