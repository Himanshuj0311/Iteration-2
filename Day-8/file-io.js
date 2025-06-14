// file-io.js
const fs = require('fs');

// Write to a file
fs.writeFileSync('output.txt', 'Hello from Node.js!');

// Read the file
const content = fs.readFileSync('output.txt', 'utf-8');
console.log('File content:', content);
