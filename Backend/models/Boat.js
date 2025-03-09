const mongoose = require("mongoose");

const boatSchema = new mongoose.Schema({
  name_boat: String,
  reg_no: String,
  owner: String,
  Harbour: String,
  no_crew: Number,
  biometric_card: String,
  other_id: String,
  crew_without_id_card: String,
  fishing_boat_document: String,
  GPS: String,
  compass: String,
  HF: String,
  VHF: String,
  Life_Buoy: String,
  Life_Jacket: String,
  Dats: String,
  owner_contact: Number,
  colour_coding: String,
});

const Boat = mongoose.model("Boat", boatSchema);

module.exports = Boat; // ✅ Correctly exporting the model
