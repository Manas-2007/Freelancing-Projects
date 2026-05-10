const Donor = require('../models/Donor');

// Register a New Donor
exports.registerDonor = async (req, res) => {
    try {
        const { name, bloodGroup, phone, location } = req.body;

        // Check if donor already exists with same phone
        const existingDonor = await Donor.findOne({ phone });
        if (existingDonor) {
            return res.status(400).json({ message: "Donor with this phone number already registered!" });
        }

        const newDonor = new Donor({
            name,
            bloodGroup,
            phone,
            location
        });

        await newDonor.save();
        res.status(201).json({ message: "Donor Registered Successfully!", donor: newDonor });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Donors
exports.getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find().sort({ createdAt: -1 });
        res.status(200).json(donors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};