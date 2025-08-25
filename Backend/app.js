import express from "express";
import cors from "cors";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

//json body
app.use(express.json());

//Cors
app.use(cors());

export default app;
