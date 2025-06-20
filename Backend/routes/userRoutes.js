const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser }=require('../controllers/userController.js')

// Create router instance
const router = express.Router();

// GET all users
router.get('/getall', getUsers);

// GET user by ID
router.get('/getbyId/:id', getUserById);

// POST create new user (registration)
router.post('/register', createUser);

// PUT update user by ID
router.put('/update/:id', updateUser);

// DELETE user by ID
router.delete('/delete/:id', deleteUser);

module.exports = router;
