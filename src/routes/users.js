const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();

// get request
router.get("/", userController.getAllUser);
// post request
router.post("/", userController.createNewUser);
// put request
router.patch("/:id", userController.updateUser);
// delete request
router.delete("/:id", userController.deleteUser);

module.exports = router;
