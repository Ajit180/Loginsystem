const db = require("../config/db");
const { hashPassword } = require('../utlis/hashedpassword');


const getUsers = async (req, res) => {
  try {
    const [data] = await db.query("SELECT * FROM registration");

    if (!data || data.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No user records found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "All User Records",
      totalUsers: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Users API",
      error,
    });
  }
};


const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const [data] = await db.query(
      "SELECT * FROM registration WHERE id = ?",
      [userId]
    );

    if (!data || data.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No user found with this ID",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User Details Found",
      data: data[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Get User by ID",
      error,
    });
  }
};


const createUser = async (req, res) => {
  try {
    const { name, email, password, confirm_password, mobile_no, username, address } = req.body;

    // Basic validation
    if (!name || !email || !password || !confirm_password || !mobile_no || !username || !address) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

        const hashedPassword = await hashPassword(password);
        const hashedConfirm = await hashPassword(confirm_password);

    // Insert into DB
    const [result] = await db.query(
      `INSERT INTO registration (name, email, password, confirm_password, mobile_no, username, address)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, hashedPassword, hashedConfirm, mobile_no, username, address]
    );

    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      insertedId: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating User",
      error,
    });
  }
};


const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, mobile_no, username, address } = req.body;

    // Optional: Validate fields
    const [data] = await db.query(
      `UPDATE registration 
       SET name = ?, email = ?, mobile_no = ?, username = ?, address = ?
       WHERE id = ?`,
      [name, email, mobile_no, username, address, userId]
    );

    return res.status(200).send({
      success: true,
      message: "User updated successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Updating User",
      error,
    });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const [data] = await db.query("DELETE FROM registration WHERE id = ?", [userId]);

    return res.status(200).send({
      success: true,
      message: "User deleted successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Deleting User",
      error,
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
