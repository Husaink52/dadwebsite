const {
  User,
  Individual,
  Proprietor,
  Firm,
  LLP,
  Corporate,
} = require("../models/userModel");

// Map client type to model
const getModelByClientType = (clientType) => {
  const modelMap = {
    Individual,
    Proprietor,
    Firm,
    LLP,
    Corporate,
  };
  return modelMap[clientType] || null;
};

// =======================
// CREATE
// =======================
const createUser = async (req, res) => {
  try {
    const { clientType, ...rest } = req.body;
    const Model = getModelByClientType(clientType);

    if (!Model) {
      return res.status(400).json({ error: "Invalid client type" });
    }

    const newUser = new Model({ clientType, ...rest });
    await newUser.save();

    return res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// =======================
// READ ALL
// =======================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// =======================
// READ BY ID
// =======================
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// =======================
// UPDATE
// =======================
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// =======================
// DELETE
// =======================
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
