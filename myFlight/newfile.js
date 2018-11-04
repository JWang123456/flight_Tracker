// this is a new fileconst http = require('http');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Now my pc become a server');
        res.end();
    }

    if(req.url === '/user'){
        res.write(JSON.stringify(['justin', 'is a user']));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New connection');
// })

server.listen(3000);

console.log('Listening on port 3000');