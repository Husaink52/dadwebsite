const express = require("express");
const { validationResult } = require("express-validator");

const {
  individualValidation,
  proprietorValidation,
  firmValidation,
  llpValidation,
  corporateValidation,
} = require("../middleware/userValidation");

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Helper for dynamic validation
const getValidationsByType = (type) => {
  switch (type) {
    case "Individual":
      return individualValidation;
    case "Proprietor":
      return proprietorValidation;
    case "Firm":
      return firmValidation;
    case "LLP":
      return llpValidation;
    case "Corporate":
      return corporateValidation;
    default:
      return null;
  }
};

// CREATE
router.post("/createUser", async (req, res, next) => {
  const { clientType } = req.body;
  const validations = getValidationsByType(clientType);

  if (!validations) {
    return res.status(400).json({ error: "Invalid client type" });
  }

  try {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    return createUser(req, res, next);
  } catch (err) {
    next(err);
  }
});

// READ all users
router.get("/users", getAllUsers);

// READ single user
router.get("/users/:id", getUserById);

// UPDATE
router.put("/users/:id", async (req, res, next) => {
  const { clientType } = req.body;
  const validations = getValidationsByType(clientType);

  if (!validations) {
    return res.status(400).json({ error: "Invalid client type" });
  }

  try {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    return updateUser(req, res, next);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/users/:id", deleteUser);

module.exports = router;
