import app from "./app.js";
import dotenv from "dotenv";
import dbconnection from "./util/db.js";
dotenv.config();

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbconnection();
})