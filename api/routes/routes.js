const express = require("express");
const router = express.Router();
const petsSchema = require("../models/PetModel");
const PetModel = require("../models/PetModel");

// Adds a pet to a pets DB document
router.post("/pet", async (req, res) => {
  const pet = new petsSchema({
    name: req.body.name,
    type: req.body.type,
    color: req.body.color,
    age: req.body.age,
  });
  try {
    const savedPet = await pet.save();
    res.json(savedPet);
  } catch (err) {
    res.json({ message: err });
  }
});

// Gets all pets
router.get("/pets", async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json(pets);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
