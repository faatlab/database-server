require("dotenv").config();
require("./DB/connection");

const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");

const faatlab_DB_Server = express();

const allowedOrigins = [
   "https://rawscholar.com",
   "https://www.rawscholar.com",
   "https://leadzedu.com",
   "https://www.leadzedu.com",
   "https://leadzstudyabroad.com",
   "https://www.leadzstudyabroad.com",
];

faatlab_DB_Server.use(
   cors({
      origin: function (origin, callback) {
         if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
         } else {
            callback(new Error("Not allowed by CORS"));
         }
      },
   })
);
faatlab_DB_Server.use(express.json());
faatlab_DB_Server.use(router);

const PORT = 4200 || process.env.PORT;

faatlab_DB_Server.listen(PORT, () => {
   console.log("Server running in port: ", PORT);
});
