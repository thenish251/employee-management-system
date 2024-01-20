const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const Employee = require('../models/employeeModel');
const app = require('../app'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Employee Controller Tests', () => {
  beforeEach(async () => {
    await Employee.deleteMany({});
  });

  describe('POST /api/employees', () => {
    it('should create a new employee', async () => {
      const employeeData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        dateOfBirth: '1990-01-01',
        department: 'IT',
        position: 'Developer',
      };

      const res = await chai.request(app).post('/api/employees').send(employeeData);

      expect(res).to.have.status(201);
      expect(res.body).to.have.property('_id');
      expect(res.body.firstName).to.equal('John');
    });

    it('should return 400 if required fields are missing', async () => {
      const invalidEmployeeData = {
      };

      const res = await chai.request(app).post('/api/employees').send(invalidEmployeeData);

      expect(res).to.have.status(400);
    });

  });

  describe('GET /api/employees/:employeeId', () => {
    it('should get employee by ID', async () => {
      const newEmployee = new Employee({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        dateOfBirth: '1995-02-15',
        department: 'HR',
        position: 'Manager',
      });

      await newEmployee.save();

      const res = await chai.request(app).get(`/api/employees/${newEmployee._id}`);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('_id');
      expect(res.body.firstName).to.equal('Jane');
    });

    it('should return 404 for non-existent employee', async () => {
      const nonExistentEmployeeId = '5f6e4f2179be636688bde01a';

      const res = await chai.request(app).get(`/api/employees/${nonExistentEmployeeId}`);

      expect(res).to.have.status(404);
    });

  });

  describe('PUT /api/employees/:employeeId', () => {
    it('should update employee by ID', async () => {
      const existingEmployee = new Employee({
        firstName: 'Existing',
        lastName: 'Employee',
        email: 'existing.employee@example.com',
        dateOfBirth: '1990-05-10',
        department: 'Finance',
        position: 'Accountant',
      });

      await existingEmployee.save();

      const updatedEmployeeData = {
        firstName: 'Updated',
        lastName: 'Employee',
        email: 'updated.employee@example.com',
        dateOfBirth: '1992-08-20',
        department: 'Marketing',
        position: 'Manager',
      };

      const res = await chai
        .request(app)
        .put(`/api/employees/${existingEmployee._id}`)
        .send(updatedEmployeeData);

      expect(res).to.have.status(200);
      expect(res.body.firstName).to.equal('Updated');
    });

    it('should return 404 for non-existent employee', async () => {
      const nonExistentEmployeeId = '5f6e4f2179be636688bde01a'; // A random non-existent ID

      const res = await chai
        .request(app)
        .put(`/api/employees/${nonExistentEmployeeId}`)
        .send({});

      expect(res).to.have.status(404);
    });

  });

  describe('DELETE /api/employees/:employeeId', () => {
    it('should delete employee by ID', async () => {
      const existingEmployee = new Employee({
        firstName: 'Existing',
        lastName: 'Employee',
        email: 'existing.employee@example.com',
        dateOfBirth: '1990-05-10',
        department: 'Finance',
        position: 'Accountant',
      });

      await existingEmployee.save();

      const res = await chai.request(app).delete(`/api/employees/${existingEmployee._id}`);

      expect(res).to.have.status(204);

      const deletedEmployee = await Employee.findById(existingEmployee._id);
      expect(deletedEmployee).to.be.null;
    });

    it('should return 404 for non-existent employee', async () => {
      const nonExistentEmployeeId = '5f6e4f2179be636688bde01a'; // A random non-existent ID

      const res = await chai.request(app).delete(`/api/employees/${nonExistentEmployeeId}`);

      expect(res).to.have.status(404);
    });

  });

  after(async () => {
    await mongoose.connection.close();
  });
});
