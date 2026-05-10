const User = require('../models/User'); // Model import karo
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 📝 REGISTER LOGIC
exports.register = async (req, res) => {
    try {
        const { name, email, password, phone, bloodGroup, location, lastDonation } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        // 1. Password Hash karo (YE MISSING THA)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 2. Database mein 'hashedPassword' bhejo
        user = new User({ 
            name, 
            email, 
            password: hashedPassword, // 👈 Plain password nahi, hash save karo
            phone, 
            bloodGroup, 
            location, 
            lastDonation 
        });
        
        await user.save();
        res.status(201).json({ msg: "Registered successfully!" });

    } catch (err) {
        res.status(500).json({ msg: "Server Error: " + err.message });
    }
};

// 🔑 LOGIN LOGIC
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. User ko dhoondo
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User nahi mila bhai!" });

    // 2. Password check (bcrypt use kar rahe ho toh)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Galat password hai!" });

    // 3. Token generate karo
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // 4. ✅ YE SABSE ZAROORI HAI: Pura data bhejo
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bloodGroup: user.bloodGroup,
        phone: user.phone,       // 👈 Ye line check karo
        location: user.location, // 👈 Ye line check karo
        lastDonation: user.lastDonation,
        role: user.role
      }
    });

  } catch (err) {
    console.log(err); // 👈 Terminal mein error dekho
    res.status(500).json({ msg: "Server error: " + err.message });
}
};