const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    lastDonation: { type: Date },
    isAvailable: { type: Boolean, default: true },
    role: { type: String, default: 'donor' }
}, { timestamps: true });

// ✅ YE HAI ASLI FIX:
// Pehle check karo agar 'Donor' model already compiled hai (mongoose.models.Donor)
// Agar hai toh wahi use karo, varna naya banao.
const Donor = mongoose.models.Donor || mongoose.model('Donor', DonorSchema);

module.exports = Donor;