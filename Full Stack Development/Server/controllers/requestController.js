const mongoose = require('mongoose');
const Request = require('../models/Request');
const Donor = require('../models/Donor'); 

// 1. Patient ki Notifications Fetch Karna
exports.getPatientRequests = async (req, res) => {
    try {
        const { patientId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(patientId)) {
            return res.status(400).json({ msg: "Invalid Patient ID format" });
        }

        const requests = await Request.find({ patientId })
            // Hum populate abhi bhi rakhenge backup ke liye, 
            // par UI ab 'donorName' field use karega
            .populate({
                path: 'donorId',
                model: 'Donor',
                select: 'name phone location bloodGroup'
            })
            .sort({ updatedAt: -1 });

        console.log(`Fetched ${requests.length} requests for Patient: ${patientId}`);
        res.status(200).json(requests);
    } catch (err) {
        console.error("Fetch Error:", err);
        res.status(500).json({ msg: "Notifications fetch error!", error: err.message });
    }
};

// 2. Donor Request Accept Karega
exports.acceptRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        // 🔴 UPDATE: Frontend se donorName bhi mangwa rahe hain
        const { donorId, donorName } = req.body; 

        if (!donorId || !requestId) {
            return res.status(400).json({ msg: "Donor ID and Request ID are required!" });
        }

        const validDonorId = new mongoose.Types.ObjectId(donorId);

        const updatedRequest = await Request.findByIdAndUpdate(
            requestId,
            { 
                $set: { 
                    status: 'Accepted', 
                    donorId: validDonorId,
                    donorName: donorName // 👈 Direct save ho jayega (No more populate null issue)
                } 
            },
            { new: true, runValidators: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({ msg: "Request nahi mili bhai!" });
        }

        console.log("✅ Request Accepted. Donor Saved as:", updatedRequest.donorName);

        res.status(200).json({ 
            msg: "Mubarak ho! Request Accept ho gayi.", 
            data: updatedRequest 
        });
    } catch (err) {
        console.error("Accept Error:", err);
        res.status(500).json({ msg: "Acceptance error!", error: err.message });
    }
};