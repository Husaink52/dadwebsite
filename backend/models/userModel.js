const mongoose = require("mongoose");

const accountantSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
}, { _id: false });

const gstEntrySchema = new mongoose.Schema({
  state: { type: String },
  gst: { type: String },
}, { _id: false });

const userSchema = new mongoose.Schema({
  clientType: {
    type: String,
    required: true,
    enum: ['individual', 'proprietor', 'firm', 'llp', 'corporate'],
  },

  data: {
    // Common Fields
    clientName: String,         // For individual & proprietor
    businessName: String,       // For business types
    contact: String,
    email: String,
    address: String,

    // Identification Numbers
    pan: String,
    aadhar: String,             // For individual only
    tan: String,
    gst: String,

    // Nested Sub-Documents
    accountant1: accountantSchema,     // For firm, LLP, corporate
    accountant2: accountantSchema,     // For firm, LLP, corporate
    additionalGST: [gstEntrySchema],   // Array for firm, LLP, corporate
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
