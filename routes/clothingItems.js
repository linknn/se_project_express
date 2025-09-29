const router = require("express").Router();
const { getItems, createItem, deleteItem } = require("../controllers/users");

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
