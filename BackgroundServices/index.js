import express from "express";
import dotenv from "dotenv";
import dbconnection from "./utils/db.js";
import cron from "node-cron";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//SCHEDULE SERVICES
const services = () => {
    cron.schedule('* * * * * *', () => {});
}

services();

app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`)
    dbconnection();
});