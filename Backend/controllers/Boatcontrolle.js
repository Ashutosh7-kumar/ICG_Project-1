const Boat = require("../models/Boat.js");

// Create a boat
exports.createBoat = async (req, res) => {
  try {
    // console.log(req.body)
    const boat = new Boat(req.body);
    await boat.save();
    res.status(201).json(boat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all boats
exports.getAllBoats = async (req, res) => {
  try {
    const boats = await Boat.find();
    res.status(200).json(boats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a boat by ID
exports.getBoatById = async (req, res) => {
  try {
    const boat = await Boat.findById(req.params.id);
    if (!boat) return res.status(404).json({ message: "Boat not found" });
    res.status(200).json(boat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a boat
exports.updateBoat = async (req, res) => {
  try {
    const boat = await Boat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!boat) return res.status(404).json({ message: "Boat not found" });
    res.status(200).json(boat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a boat
exports.deleteBoat = async (req, res) => {
  try {
    const boat = await Boat.findByIdAndDelete(req.params.id);
    if (!boat) return res.status(404).json({ message: "Boat not found" });
    res.status(200).json({ message: "Boat deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
