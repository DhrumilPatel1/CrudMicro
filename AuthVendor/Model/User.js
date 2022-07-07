const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    vendor_name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;