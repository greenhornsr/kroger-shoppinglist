// import dotenv 
require('dotenv').config();

const server = require('./api/server');
const port = process.env.PORT || '8000';

server.listen(() => {
    console.log(
        `\n\n******************************************\nServer is listening intently on port: ${port}\n******************************************\n\n`
        );
});