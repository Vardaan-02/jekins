import express from "express";

const app = express();

import tempRouter from "./routes/temp.js";

app.use(tempRouter);

app.listen("8000", () => {
  console.log("Server Started on PORT 8000");
});
