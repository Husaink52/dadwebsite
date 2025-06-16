const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

// Create a new user
router.post("/createUser", createUser);

// Get all users (optionally filtered by search/clientType)
router.get("/getAllUsers", getUsers);

// Update a user by ID
router.put("/updateUser/:id", updateUser);

// Delete a user by ID
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
