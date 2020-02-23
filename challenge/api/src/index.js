const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const { config } = require("./config/index");
const authApi = require("./routes/auth");
require("./lib/mongo");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
authApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
