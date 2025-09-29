const ClothingItem = require("../models/clothingItem");

const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.send(items))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: err.message });
    });
};

const createItem = (req, res) => {
  const { name, weather, imageUrl, owner } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((newItem) => res.status(201).send(newItem))
    .catch((err) => {
      console.error(err);
      return res.status(500).send({
        message: err.message,
      });
    });
};

const deleteItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndDelete(itemId)
    .then((deletedItem) => {
      if (!deletedItem) {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.send({ message: "Item deleted", deletedItem });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};

module.exports = { getItems, createItem, deleteItem };
