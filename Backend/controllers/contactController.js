const Contact = require('../models/Login');

// User Login Controller
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in DB
    const user = await Contact.findOne({ email, userType: 'user' });
    if (!user) {
      return res.status(400).json({ message: 'User not found or incorrect role' });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.status(200).json({
      message: 'User login successful',
      userType: user.userType,
      user
    });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Admin Login Controller
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin in DB
    const admin = await Contact.findOne({ email, userType: 'admin' });
    if (!admin) {
      return res.status(400).json({ message: 'Admin not found or incorrect role' });
    }

    // Check password
    if (admin.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.status(200).json({
      message: 'Admin login successful',
      userType: admin.userType,
      admin
    });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
