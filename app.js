const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { createUser, loginUser } = require("./controllers/users");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(express.json());

// auth routes - public
app.post("/signup", createUser);
app.post("/signin", loginUser);

// mount main router
// protects other routes in index.js
app.use("/", mainRouter);

// fallback 404 for unknown routes
app.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
