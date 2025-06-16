const User = require("../models/userModel.js");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { clientType, data } = req.body;

    if (!clientType || !data) {
      return res.status(400).json({ message: "clientType and data are required" });
    }

    const user = await User.create({ clientType, data });
    res.status(201).json(user);
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({ message: "Server error while creating user" });
  }
};

// Get all users (optional search and filter)
exports.getUsers = async (req, res) => {
  try {
    const { search, clientType } = req.query;
    let query = {};

    if (clientType) {
      query.clientType = clientType;
    }

    if (search) {
      // Search in multiple possible name fields
      query.$or = [
        { "data.clientName": { $regex: search, $options: "i" } },
        { "data.businessName": { $regex: search, $options: "i" } },
      ];
    }

    const users = await User.find(query).sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ message: "Server error while fetching users" });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { clientType, data } = req.body;

    if (!clientType || !data) {
      return res.status(400).json({ message: "clientType and data are required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { clientType, data },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ message: "Server error while updating user" });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: "Server error while deleting user" });
  }
};
