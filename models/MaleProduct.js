const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaleProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fabric: {
    type: Array,
    required: true
  },
  materials: {
    type: Array,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  productGroup: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  }
});

module.exports = MaleProduct = mongoose.model("male products", MaleProductSchema);