// db.js
const { Pool } = require('pg');

// Configure the database connection
console.log("Works")
const pool = new Pool({
  user: 'postgres',
  host: '34.31.169.95',
  database: 'Project',
  password: 'BestPasswordEver',
  port: 5432,  // default PostgreSQL port
});
console.log("Works Again")

// Export the pool to use in other files
module.exports = pool;
