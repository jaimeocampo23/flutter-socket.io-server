const express = require('express');
const path = require('path');
const { disconnect } = require('process');
require('dotenv').config();



// App de express
const app = express();

// Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')

const publicPath = path.resolve(__dirname, 'public');

app.use( express.static( publicPath ) );

server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);

    console.log('servidor corriendo en el puerto', process.env.PORT);

})