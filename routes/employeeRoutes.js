const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const validationMiddleware = require('../middleware/validationMiddleware');

// Create Employee
router.post('/employees', validationMiddleware.validateEmployee, employeeController.createEmployee);

// Read, Update, Delete Employee
router.get('/employees/:employeeId', employeeController.getEmployeeById);
router.put('/employees/:employeeId', validationMiddleware.validateEmployee, employeeController.updateEmployee);
router.delete('/employees/:employeeId', employeeController.deleteEmployee);

module.exports = router;
