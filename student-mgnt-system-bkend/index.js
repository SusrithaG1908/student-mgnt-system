const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(studentRoutes);

// Default route
app.get('/', (req, res) => {
  res.send("Student Management System");
});

// DB + Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
