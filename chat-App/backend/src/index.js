// const express = require("express");
import express from "express";
// const dotenv = require("dotenv");
import Path from "path";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";

dotenv.config();
const app = express();
const _dirname = Path.resolve();
const port = process.env.PORT;

console.log(port);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);
// make ready for deploymment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(Path.join(_dirname, "../frontend/dist")));
  app.use((req, res) => {
    res.sendFile(Path.join(_dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
