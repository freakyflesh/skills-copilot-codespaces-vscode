// Create web server
const http = require('http');
const server = http.createServer((req, res) => {
    // Set status code and header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // Write to the page
    res.write('<h1>Hello World!</h1>');
    res.end();
});
// Set the port
const port = 5000;
// Listen on that port
server.listen(port, () => console.log(`Server running on port ${port}`));

