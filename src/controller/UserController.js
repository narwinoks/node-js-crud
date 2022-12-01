const userModel = require("../models/users");

const getAllUser = async (req, res) => {
  // rows fields
  try {
    const [data] = await userModel.getAllUser();
    res.json({
      message: "get all users successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  //   console.log(req.body);
  const { body } = req;
  if (!body.name || body.email || body.address) {
    res.status(400).json({
      message: "Invalid data",
      data: "",
    });
  }
  try {
    await userModel.createNewUser(body);
    res.status(201).json({
      message: "create new user successfully created",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const { body } = req;
  try {
    await userModel.updateUser(body, id);
    res.json({
      message: "update user successfully !",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.json({
      message: "Delete user successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
