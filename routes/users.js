const express = require("express");
const {
  createUser,
  allUsers,
  singleUser,
  deleteUser,
  updateUser,
} = require("../controller/user.js");

const router = express.Router();

router.get("/", allUsers);

router.post("/", createUser);

router.get("/:id", singleUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
