// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Create Express Server
const server = express();

// Import Router


// Import MiddleWare
server.use(helmet(), cors(), express.json());
// server.use('/')
// server.use('/auth')


server.get('/', (req, res) => {
    res.send(`RUNNING!!`)
})

module.exports = server;