const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // // console.log(req.url);
    // // res.statusCode = 200;
    // // res.setHeader('Content-Type', 'text/html');
    // res.end("<h1>HELLO</h1>");
    if (req.url == '/'){
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else if(req.url == '/about'){
        fs.readFile('./about.html', (err, data) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else if(req.url == '/contact-me'){
        fs.readFile('./contact_me.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else {
        fs.readFile('./404.html', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }

})

server.listen(8080, ()=> {
    console.log("Server listening at port 8080");
})