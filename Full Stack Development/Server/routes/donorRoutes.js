const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');
const Donor = require('../models/Donor'); // ✅ YE MISSING THA! Iske bina crash ho raha tha.

// 1. Register Donor
router.post('/register', donorController.registerDonor);

// 2. Get All Donors (Jo hum DonorPool.jsx mein use kar rahe hain)
router.get('/all-donors', async (req, res) => {
    try {
        // Database se saare donors fetch karo (password chhor kar)
        const donors = await Donor.find().select('-password'); 
        
        console.log(`Backend: ${donors.length} donors fetched successfully!`); // Debugging ke liye
        res.status(200).json(donors);
    } catch (err) {
        console.error("Error in /all-donors:", err.message);
        res.status(500).json({ msg: "Donor pool fetch karne mein locha ho gaya!" });
    }
});

// Purana /list wala agar tum chaho toh hata sakte ho ya rehne do
router.get('/list', donorController.getAllDonors);

module.exports = router;