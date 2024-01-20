module.exports = {
    // MongoDB connection URI
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/employee_management',
  
    // Port for the Express server
    port: process.env.PORT || 3000,
  
    // JWT secret key for authentication
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  };
  