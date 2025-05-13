require("dotenv").config();
require("./DB/connection");

const express = require("express");
const cors = require("cors");
const router = require("./Routes/router")

const faatlab_DB_Server = express();

faatlab_DB_Server.use(cors());
faatlab_DB_Server.use(express.json())
faatlab_DB_Server.use(router)

const PORT = 4200 || process.env.PORT;

faatlab_DB_Server.listen(PORT, () => {
   console.log("Server running in port: ", PORT);
});