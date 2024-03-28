const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome to http");
    }
    if (req.url === '/route') {
        res.end("welcome to route"); //end is like return in c++ 
    }
    res.end(`<h1>hii</h1>`)
});
server.listen(5000);
//npm node package manager