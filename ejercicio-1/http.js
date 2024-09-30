const http = require('http');
const fs = require('fs');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if ( url === "/" && method === 'GET') {
        const htmlData = fs.readFileSync('index.html');
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(htmlData);   
    } else if ( url === "/alumno" && method === 'GET') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Nicolas Alsinet');   
    } else if ( url === "/info" && method === 'GET') {
        const osName = os.type();
        const osVersion = os.release();
        const osPlatform = os.platform();
        const osData = `OS Name ${osName} OS Version ${osVersion} OS Platform ${osPlatform}`
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end(osData);   
    }
})




server.listen(PORT)