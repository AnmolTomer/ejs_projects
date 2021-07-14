// console.log('Hello from app.js👋')

const http = require('http'); // Get the http module

// Set host and port
const hostname = '127.0.0.1';
const port = 3000;
// Use the http module to create Server with callback function in arrow notation style
const server = http.createServer((req, res) => {
    res.statusCode = 200; // 200 status code for everything OK.
    res.setHeader('Content-Type', 'text/plain'); // Set Type of Content
    res.end('Hello World'); // End response with what we put here.
});

// Console log what port and host server is running on.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*
This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, scalable systems are very reasonable to develop in Node.js. Blocking v/s Non-Blocking : https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
*/

// NodeJS Knowledge base for more on callbacks, securing code, callback convention etc. https://nodejs.org/en/knowledge/