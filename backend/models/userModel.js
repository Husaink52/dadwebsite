const mongoose = require('mongoose');
const { Schema } = mongoose;

// Base schema
const baseOptions = {
  discriminatorKey: 'clientType', // key that differentiates models
  collection: 'users',
  timestamps: true,
};

const UserSchema = new Schema({}, baseOptions);
const User = mongoose.model('User', UserSchema);

// =====================
// Discriminator Schemas
// =====================

// 1. Individual
const IndividualSchema = new Schema({
  clientName: String,
  contactNo: String,
  email: String,
  panNo: String,
  aadharNo: String,
});
const Individual = User.discriminator('Individual', IndividualSchema);

// 2. Proprietor
const ProprietorSchema = new Schema({
  clientName: String,
  businessName: String,
  contactNo: String,
  email: String,
  panNo: String,
  tanNo: String,
  gstNo: String,
});
const Proprietor = User.discriminator('Proprietor', ProprietorSchema);

// 3. Firm
const FirmSchema = new Schema({
  businessName: String,
  businessPan: String,
  tanNo: String,
  gstNo: String,
  contactNo: String,
  address: String,
  accountant1: {
    name: String,
    email: String,
  },
  additionalGST: [
    {
      state: String,
      gstNo: String,
    },
  ],
});
const Firm = User.discriminator('Firm', FirmSchema);

// 4. LLP
const LLPSchema = new Schema({
  businessName: String,
  businessPan: String,
  tanNo: String,
  gstNo: String,
  contactNo: String,
  address: String,
  accountant1: {
    name: String,
    email: String,
  },
  additionalGST: [
    {
      state: String,
      gstNo: String,
    },
  ],
});
const LLP = User.discriminator('LLP', LLPSchema);

// 5. Corporate
const CorporateSchema = new Schema({
  businessName: String,
  businessPan: String,
  tanNo: String,
  gstNo: String,
  address: String,
  contactNo: String,
  accountant1: {
    name: String,
    email: String,
  },
  additionalGST: [
    {
      state: String,
      gstNo: String,
    },
  ],
});
const Corporate = User.discriminator('Corporate', CorporateSchema);

// Export all models
module.exports = {
  User,
  Individual,
  Proprietor,
  Firm,
  LLP,
  Corporate,
};
