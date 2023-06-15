require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_dialect = process.env.DB_DIALECT;
const db_port = process.env.DB_PORT;

module.exports = {
  "development": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": db_dialect,
    "port": db_port
  },
  "test": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": db_dialect,
    "port": db_port
  },
  "production": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": db_dialect,
    "port": db_port
  }
}
