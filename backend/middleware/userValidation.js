const { body } = require("express-validator");

const individualValidation = [
  body("clientName").notEmpty().withMessage("Client name is required"),
  body("contactNo").notEmpty().withMessage("Contact number is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("panNo").notEmpty().withMessage("PAN number is required"),
  body("aadharNo").notEmpty().withMessage("Aadhar number is required"),
];

const proprietorValidation = [
  body("clientName").notEmpty(),
  body("businessName").notEmpty(),
  body("contactNo").notEmpty(),
  body("email").isEmail(),
  body("panNo").notEmpty(),
  body("tanNo").notEmpty(),
  body("gstNo").notEmpty(),
];

const firmValidation = [
  body("businessName").notEmpty(),
  body("businessPan").notEmpty(),
  body("tanNo").notEmpty(),
  body("gstNo").notEmpty(),
  body("contactNo").notEmpty(),
  body("address").notEmpty(),
  body("accountant1.name").notEmpty(),
  body("accountant1.email").isEmail(),
  body("additionalGST").isArray(),
  body("additionalGST.*.state").notEmpty(),
  body("additionalGST.*.gstNo").notEmpty(),
];

const llpValidation = [...firmValidation]; // same structure as Firm

const corporateValidation = [...firmValidation]; // same structure as Firm

module.exports = {
  individualValidation,
  proprietorValidation,
  firmValidation,
  llpValidation,
  corporateValidation,
};
