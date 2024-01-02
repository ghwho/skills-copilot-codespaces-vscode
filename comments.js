// Create web server application with Node.js

// Load modules
const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const ejs = require('ejs');

// Load templates
const index_page = fs.readFileSync('./index.ejs', 'utf8');
const other_page = fs.readFileSync('./other.ejs', 'utf8');
const style_css = fs.readFileSync('./style.css', 'utf8');

// Set contents
const max_num = 10;
let filename = 'mydata.txt';
let message_data;
readFromFile(filename);

// Create server
const server = http.createServer(getFromClient);

// Start server
server.listen(3000);
console.log('Server start!');