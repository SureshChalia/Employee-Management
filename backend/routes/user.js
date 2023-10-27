const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const {deleteUser} = require("../controller/deleteUser");
const {editUser} = require("../controller/editUser")
const {getUserById} = require("../controller/getUserById");

router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.delete("/deleteUser/:id",deleteUser);
router.put("/updateUser/:id",editUser);
router.get("/getUser/:id",getUserById);

module.exports = router;
