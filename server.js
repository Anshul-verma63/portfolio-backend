import express from "express";
import cors from "cors";
import env from "dotenv";
import router from "./routs/routes.js";

//dotenv Configuration
env.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

// routs
app.get("/", (req, res) => {
  res.send("Hello i am server");
});
app.use("/api/v1/portfolio", router);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
