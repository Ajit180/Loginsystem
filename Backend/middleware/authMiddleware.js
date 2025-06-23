require('dotenv').config();
const jwt = require('jsonwebtoken');

// Load JWT secret from environment
const JWT_SECRET = process.env.JWT_SECRET;

const requireAuth = (req, res, next) => {
  try {
    // Get token from custom header
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. Token missing',
      });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user info from token to request object
    req.user = decoded;

    next(); // proceed to the next middleware/controller
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
      error: error.message,
    });
  }
};

module.exports = requireAuth;
