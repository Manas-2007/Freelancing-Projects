const express = require('express');
const router = express.Router();

// Controller se functions import ho rahe hain
const { 
    registerPatient, 
    getAllPatients, 
    acceptPatientRequest,
    getDonorDetails
} = require('../controllers/patientController');

// 1. Register: POST /api/patients/register
router.post('/register', registerPatient);

// 2. List: GET /api/patients/list
router.get('/list', getAllPatients); 

// 3. Accept: PUT /api/patients/accept/:id
router.put('/accept/:id', acceptPatientRequest); 

// ✅ Donor ki info nikalne ka rasta
router.get('/donor/:donorId', getDonorDetails);

module.exports = router;