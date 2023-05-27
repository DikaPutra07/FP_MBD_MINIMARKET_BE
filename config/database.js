require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

module.exports = {
  "development": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "sakinahjaya",
    "database": "minimarket_db_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "sakinahjaya",
    "database": "minimarket_db_production",
    "host": "localhost"
  }
}
