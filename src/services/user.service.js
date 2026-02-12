const bcrypt = require('bcryptjs');

const users = [
  {
    id: "1",
    email: "juanjo@test.com",
    passwordHash: bcrypt.hashSync("Password123!", 10),
    roles: ["CUSTOMER"]
  }
];

function findByEmail(email) {
  return users.find(u => u.email === email);
}

module.exports = { findByEmail };
