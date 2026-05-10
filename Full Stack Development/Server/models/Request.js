const mongoose = require('mongoose');
// Reference models (just in case)
require('./Donor');
require('./Patient');

const RequestSchema = new mongoose.Schema({
    // Kis patient ne request ki
    patientId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Patient', 
        required: true 
    },
    // Donor jo accept karega (Technical reference)
    donorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Donor', 
        default: null 
    }, 
    // ✅ Portfolio Special: Direct name storage (Avoids populate issues)
    donorName: { 
        type: String, 
        default: null 
    },
    // ✅ Card display fields
    name: { 
        type: String, 
        required: true 
    }, 
    bloodGroup: { 
        type: String, 
        required: true 
    },
    units: { 
        type: Number, 
        required: true 
    },
    hospital: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String 
    },
    urgency: { 
        type: String, 
        enum: ['Normal', 'Urgent', 'Critical'], 
        default: 'Normal' 
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Accepted', 'Rejected', 'Completed'], 
        default: 'Pending' 
    },
    message: { 
        type: String 
    }
}, { timestamps: true });

// Avoid Re-compilation Error
const Request = mongoose.models.Request || mongoose.model('Request', RequestSchema);
module.exports = Request;