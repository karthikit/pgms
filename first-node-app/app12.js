const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Hai');
        res.end();
    }
    if(req.url === '/dept'){
        res.write(JSON.stringify(['it','cse','ece']));
        res.end();
    }
});

server.listen(3000);
console.log('listening port 3000..');
