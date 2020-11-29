// Dependencies

var path = require('path');
var http = require('http');
var express = require('express');
var socketIO = require('socket.io');

//Initialise dependencies
var app = express();
var server = http.Server(app);
var io = socketIO(server);




app.set('port', 5000);
app.use(express.static(__dirname + '/public'));

// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});

// Starts the server.
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
});


setInterval(function() {
    io.sockets.emit('message', 'hi!');
}, 1000);
