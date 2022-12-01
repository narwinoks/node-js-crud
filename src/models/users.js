const connection = require("../config/db");

const getAllUser = () => {
  const sqlQuery = "SELECT * FROM users";
  return connection.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO users (name, email, address) VALUES ('${body.name}','${body.email}','${body.address}')`;
  return connection.execute(sqlQuery);
};

const updateUser = (body, id) => {
  const sqlQuery = `UPDATE users SET name ='${body.name}' ,email ='${body.email}' ,address ='${body.address}' WHERE id = ${id}`;
  return connection.execute(sqlQuery);
};

const deleteUser = (id) => {
  const sqlQuery = `DELETE FROM users WHERE id = ${id}`;
  return connection.execute(sqlQuery);
};
module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
