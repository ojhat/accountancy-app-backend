import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
//Routers
import accountancyUserRouter from "./router/accountancyUser.routes";
import transactionRouter from "./router/transaction.routes";
import assetRouter from "./router/asset.routes";
const app = express();
//add middlewares
app.use(cors());
app.use(express.json());
// app.use(attachUserToResponse);

//connection uri
const uri = process.env.ATLAS_URI;
//establish mongodb connection
mongoose.connect(uri!);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

//set up routers
app.use("/api/accountancy/users", accountancyUserRouter);
app.use("/api/accountancy/transactions", transactionRouter);
app.use("/api/accountancy/assets", assetRouter);

app.get("/", (req, res) => {
  res.send("Hammad's server");
});
//listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}`));
