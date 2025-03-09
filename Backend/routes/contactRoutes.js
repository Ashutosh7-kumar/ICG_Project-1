// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { loginUser, loginAdmin } = require('../controllers/contactController');
const boatController = require("../controllers/Boatcontrolle");

router.post("/create", boatController.createBoat);
router.get("/getBoat", boatController.getAllBoats);
router.get("/:id", boatController.getBoatById);
router.put("/:id", boatController.updateBoat);
router.delete("/:id", boatController.deleteBoat);
// User Login Route
router.post('/login/user', loginUser);

// Admin Login Route
router.post('/login/admin', loginAdmin);

module.exports = router;
