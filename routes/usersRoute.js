const express = require('express');
const { getAllusers, createUser, getUserbyID, deleteUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.get("/", getAllusers);
router.post("/", createUser);
router.get("/:id", getUserbyID);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);



module.exports = router;

