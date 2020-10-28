const express = require('express'); //get express library
const app = express(); //use express fucntion
const port = process.env.PORT || 3000;
const server = app.listen(port); //create a server on port 3000 and wait for connection
app.use(express.static('public')); //go to public file

console.log("server is running on port " + port); //tells me that server is running

const socket = require('socket.io'); //gets socket.io library
const io = socket(server); //creates a socket for the server

io.sockets.on('connection', (socket) => {
    socket.broadcast.emit('newUser', socket.id);
    console.log("new connection: " + socket.id);

    socket.on('message', (data) => {
        socket.broadcast.emit('message', data);
        console.log(data);
    })
});