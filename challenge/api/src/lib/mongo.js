const mongoose = require("mongoose");
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log("Database is connected"))
  .catch(err => console.log(err));