module.exports = (app) => {
    const transaction = require("../controllers/transaction.controller");
  
    // Get all the products / programmes
    app.post("/verifyTxn", transaction.verify);
  };
  