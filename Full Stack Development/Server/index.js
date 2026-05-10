require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 

// 1. DATABASE CONNECTION
connectDB();

const app = express();

// 2. MIDDLEWARES
app.use(cors()); 
app.use(express.json()); 

// 3. ROUTES IMPORT
const authRoutes = require('./routes/authRoutes');
const donorRoutes = require('./routes/donorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const requestRoutes = require('./routes/requestRoutes'); 

// 4. ROUTES MIDDLEWARE
app.use('/api/auth', authRoutes);      
app.use('/api/donors', donorRoutes);    
app.use('/api/patients', patientRoutes); 
app.use('/api/requests', requestRoutes); 

// 5. TEST ROUTES
app.get('/', (req, res) => res.send("LifeDrop API is Running... 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});