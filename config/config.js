const config = {
  username: process.env.DBUSERNAME || "postgres",
  password: process.env.DBPASSWORD || "postgres",
  database: process.env.DB_DATABASE || "mymdb2",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",
};

module.exports = config;
