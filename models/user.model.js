const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    addresses: {
        type: Array,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: Number
    }
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model.User || mongoose.model("User", UserSchema);