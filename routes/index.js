const router = require("express").Router();

const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { createUser, loginUser } = require("../controllers/users");

// resource routes
router.use("/users", userRouter);
router.use("/items", itemRouter);

// auth routes
router.post("/signup", createUser);
router.post("/signin", loginUser);

module.exports = router;
