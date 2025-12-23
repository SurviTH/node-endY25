// import the http module
const http = require('http'); // import http module
const fs = require('fs'); // import fs module for file system operations
const _ = require('lodash'); // import lodash module

// Create an HTTP server
const server = http.createServer((req, res) => {
    // ====== Use lodash to demonstrate its functionality ======
    const randomNum = _.random(1, 100);
    console.log(`Random Number: ${randomNum}`);

    // ====== Using lodash once function ======
    const greet = _.once(() => {
        console.log('Hello from Lodash once function!');
    });

    greet();
    greet();

    //  ======= Handle incoming requests =======
    // console.log('Request received.');
    
    // ======= Handle the request object ======
    // console.log(req);
    // console.log(req.url, req.method);

    // ====== handle the response object ======
    // === set headers and send response ===
    // == Basic response ==
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello World\n');
    // res.end();

    // ====== Advanced response ======
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<head><title>My First Page</head>');
    // res.write('<h1>Hello World</h1>');
    // res.write('<p>This is a simple HTTP server.</p>');
    // res.end();

    // ======= Final response ======
    res.setHeader('Content-Type', 'text/html');

    // === set different URLs ===
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; // permanent redirection
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // ====== send different content based on URL ======
    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 500; // internal server error
            res.end('Error loading page'); // send error message
        } else {
            // res.statusCode = 200;
            // res.write(data); // alternative way
            res.end(data); // send the data as response
        }
    });

    // ====== Set the response HTTP header with HTTP status and content type ======
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World\n');
});

// ====== Server listens on port 3000 ======
// === Define the port number ===
const PORT = 3000;
// ====== Start the server ======
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});