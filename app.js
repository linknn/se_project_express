const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use((req, res, next) => {
  req.user = {
    _id: "68da24ecb30b231ab0157e2b", // paste the _id of the test user created in the previous step
  };
  next();
});

app.use(express.json());
// mount main router
app.use("/", mainRouter);

// fallback 404
app.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
