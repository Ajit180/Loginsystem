const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser }=require('../controllers/userController.js')
const {loginUser}=require('../controllers/loginController.js')
const requireAuth = require('../middleware/authMiddleware.js');

// Create router instance
const router = express.Router();

// GET all users
router.get('/getall',requireAuth ,getUsers);

// GET user by ID
router.get('/getbyId/:id', getUserById);

// POST create new user (registration)
router.post('/register', createUser);

// PUT update user by ID
router.put('/update/:id', updateUser);

// DELETE user by ID
router.delete('/delete/:id', deleteUser);

// ✅ POST login route
router.post('/login', loginUser);


module.exports = router;
