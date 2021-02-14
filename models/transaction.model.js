const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
    },
    product: {
        type: Object,
    },
    flutterRef: {
        type: String,
    },
    status: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model.Transaction || mongoose.model("Transaction", TransactionSchema);