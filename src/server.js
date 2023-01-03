import express  from "express";
require("dotenv").config();

import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

//config view engine
configViewEngine(app);
// init web routes
initWebRoutes(app);

const PORT=process.env.PORT || 4000 ; 

app.listen(PORT,()=>{
    console.log(">> App running on port = " +PORT);
})
