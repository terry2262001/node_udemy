import express from "express";
import bodyParser from "body-parser";
require("dotenv").config();
import connection from "./config/connectDB";

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

//config view engine
configViewEngine(app);
//config  body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// test connection
connection();
// init web routes
initWebRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(">> App running on port = " + PORT);
});
