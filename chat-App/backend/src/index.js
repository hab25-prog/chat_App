// const express = require("express");
import express from "express";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
// const authRoutes = require("./routes/auth.route");
import authRoutes from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

console.log(port);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
