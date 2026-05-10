const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
const Request = require('../models/Request');

// 1. Donor accepts a request (Status update: Pending -> Accepted)
// Frontend will call: axios.put('/api/requests/accept/REQUEST_ID', { donorId: 'DONOR_ID' })
router.put('/accept/:requestId', requestController.acceptRequest);

// 2. Patient sees their notifications (With Populated Donor Details)
// Is route ka controller backend mein .populate('donorId') use karega
router.get('/patient/:patientId', requestController.getPatientRequests);

// 3. Admin/Test Route: List all requests in the system (For Debugging)
router.get('/list', async (req, res) => {
    try {
        // ✅ Sabse pehle saara data mangwao aur donor ki details bhi saath lao
        const requests = await Request.find({})
            .populate('donorId', 'name bloodGroup location phone')
            .populate('patientId', 'name'); 
            
        console.log("🔍 Total requests in DB:", requests.length);
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ msg: "Server error during listing!", error: err.message });
    }
});

// 4. Create a new blood request (Patient Side)
router.post('/create', async (req, res) => {
    try {
        const newRequest = new Request(req.body);
        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (err) {
        res.status(500).json({ msg: "Could not create request", error: err.message });
    }
});

module.exports = router;