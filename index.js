var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user is connected');
	socket.on('chat message', function(msg){
	    io.emit('chat message', msg);
	  });
});


http.listen(port, function(){
	console.log('listen on *:80' + port);
});
