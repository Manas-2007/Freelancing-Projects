const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bloodGroupNeeded: { type: String, required: true },
    units: { type: Number, required: true, default: 1 },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    urgency: { type: String, enum: ['Normal', 'Urgent', 'Critical'], default: 'Normal' },
    
    // ✅ Ye teeno fields update ke liye zaroori hain
    status: { 
        type: String, 
        enum: ['Searching', 'Accepted', 'Completed'], 
        default: 'Searching' 
    },
    donorId: { 
        type: String, // Abhi ke liye String rakh rahe hain testing ke liye
        default: null 
    },
    acceptedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);