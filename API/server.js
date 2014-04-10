var Hapi = require('hapi');
var app = require('./routes/app');

var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';
var server = new Hapi.Server(host,port,{ cors: true });
app.routes(server);

server.start(function() {
    console.log("Hapi server started @ " + server.info.uri);
});
