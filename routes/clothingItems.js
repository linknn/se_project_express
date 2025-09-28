const router = require("express").Router();

router.get("/", () => console.log("GET clothing items"));
router.post("/", () => console.log("Create new item"));
router.delete("/:itemId", () => console.log("Delete item by _id"));

module.exports = router;
