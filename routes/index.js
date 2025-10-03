const router = require("express").Router();

const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const auth = require("../middlewares/auth");

// public route - GET /items
router.use("/items", itemRouter);

// protects routes below this
router.use(auth);

// resource routes
router.use("/users", userRouter);
router.use("/items", itemRouter);

module.exports = router;
