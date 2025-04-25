// controllers/studentController.js
const Student = require('../models/student');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};
