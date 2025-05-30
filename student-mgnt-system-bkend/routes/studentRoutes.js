// routes/studentRoutes.js
const express = require('express');
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

const router = express.Router();

router.post('/students', createStudent);
router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
