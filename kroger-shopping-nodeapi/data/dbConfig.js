const knex = require('knex');  // knex library
const knexConfig = require('../knexfile');  // knexfile database connector

const environment = process.env.DB_ENV || "development"  // environment selector

// export the knex instance with environment configuration
module.exports = knex(knexConfig(environment));  