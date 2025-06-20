const bcrypt = require('bcrypt');

// Hash a single password
const hashPassword = async (plainText) => {
  const saltRounds = 10;
  return await bcrypt.hash(plainText, saltRounds);
};

module.exports = { hashPassword };
