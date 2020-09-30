const http = require('http');
const server = http.createServer();
server.on('connection',(socket) => {
    console.log('Newconnection');
} );
server.listen(3000);
console.log('listening port 3000..');
