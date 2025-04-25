const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(studentRoutes);

// DB + Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
