const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
        type: Number,
    },
    desc: {
        type: String,
    },
    previews: {
        type: Array,
    },
    disabled: {
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model.Product || mongoose.model("Product", ProductSchema);