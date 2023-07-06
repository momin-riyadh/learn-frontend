const http = require('http');

function rqListener(req, res) {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
}

const server = http.createServer(rqListener);
server.listen(3000)


