const config = {
  username: process.env.username || "postgres",
  password: process.env.password || "postgres",
  database: "mymdb",
  host: "127.0.0.1",
  dialect: "postgres",
};

module.exports = config;
