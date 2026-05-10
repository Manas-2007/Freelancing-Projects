const Patient = require('../models/Patient');
const Donor = require('../models/Donor');
const Request = require('../models/Request'); // ✅ NAYA: Request model import kiya

// 1. Create Blood Request (Ab ye 'requests' collection mein jayega)
exports.registerPatient = async (req, res) => {
    try {
        const { patientId, name, bloodGroup, units, phone, hospital, urgency } = req.body;

        // Validation
        if (!bloodGroup || !units || !hospital) {
            return res.status(400).json({ error: "Bhai, Blood Group, Units aur Hospital batana zaroori hai!" });
        }

        // ✅ FIX: 'new Patient' ki jagah 'new Request' use kar rahe hain
        const newRequest = new Request({
            patientId: patientId || null, // Agar login system hai toh ID bhej dena
            name: name,                   // Patient ka naam
            bloodGroup: bloodGroup,       // Model key check: bloodGroup
            units: units,
            hospital: hospital,           // Model key check: hospital
            phone: phone,
            urgency: urgency || 'Normal',
            status: 'Pending'             // By default Pending
        });

        const savedRequest = await newRequest.save();
        
        // Console check taaki terminal mein dikhe data kahan gaya
        console.log("✅ Request saved in 'requests' collection");
        
        res.status(201).json(savedRequest);
    } catch (err) {
        console.error("Save Error:", err.message);
        res.status(500).json({ error: "Requests collection mein save nahi ho paya: " + err.message });
    }
};

// 2. Get All Nearby Requests (Donor side ke liye)
exports.getAllPatients = async (req, res) => {
    try {
        // ✅ FIX: Ab hum 'Request' collection se data uthayenge
        const requests = await Request.find({ status: 'Pending' }).sort({ createdAt: -1 });
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. ACCEPT REQUEST
exports.acceptPatientRequest = async (req, res) => {
    try {
        const { donorId } = req.body;
        const requestId = req.params.id;

        if (!donorId) {
            return res.status(400).json({ error: "Donor ID missing hai bhai!" });
        }

        // ✅ FIX: Request model mein update kar rahe hain
        const updatedRequest = await Request.findByIdAndUpdate(
            requestId,
            { 
                status: 'Accepted', 
                donorId: donorId,
                acceptedAt: new Date()
            },
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({ error: "Ye request database mein nahi mili." });
        }

        res.status(200).json(updatedRequest);
    } catch (err) {
        console.error("Accept Error:", err.message);
        res.status(500).json({ error: "Update nahi ho paya: " + err.message });
    }
};

// 4. Get Donor Info (Patient Dashboard ke liye)
exports.getDonorDetails = async (req, res) => {
    try {
        const { donorId } = req.params;
        const donor = await Donor.findById(donorId).select('name phone bloodGroup location'); 
        
        if (!donor) {
            return res.status(404).json({ message: "Donor info not found" });
        }
        
        res.status(200).json(donor);
    } catch (error) {
        console.error("Controller Error:", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};