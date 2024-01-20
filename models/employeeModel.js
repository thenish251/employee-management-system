const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date },
  department: { type: String },
  position: { type: String },
});

module.exports = mongoose.model('Employee', employeeSchema);
