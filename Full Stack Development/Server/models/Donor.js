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

// ✅ AGAR YE NAHI LIKHA TOH SERVER CRASH HOTA RAHEGA
module.exports = mongoose.models.Donor || mongoose.model('Donor', DonorSchema);