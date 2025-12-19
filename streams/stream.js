// import the 'fs' module for file system operations; built-in module on nodejs
const fs = require('fs');

// Create 'docs' directory if it doesn't exist
// if (!fs.existsSync('./docs')) {
//     fs.mkdirSync('./docs');
// } else {
//     console.log('Directory already exists.');
// }

// Create File Before Reading
// if (!fs.existsSync('./docs/blog1.txt')) {
//     fs.writeFileSync('./docs/blog1.txt', 'Hello, this is blog1.');
// } else {
//     console.log('File already exists.');
// }

// if(!fs.existsSync('./docs/blog2.txt')) {
//     fs.writeFileSync('./docs/blog2.txt', 'Hello, this is blog2.');
// } else {
//     console.log('File already exists.');
// }

// Create a readable stream
// 2 arguments: path, options
const readSteam = fs.createReadStream('./docs/blog1.txt', { encoding: 'utf8' });
const writeSteam = fs.createWriteStream('./docs/blog2.txt');

// Event listener for 'data' event
// on method listens for events
readSteam.on('data', (chunk) => {
    console.log('----- New Chunk -----');
    // console.log(chunk.toString());
    console.log(chunk);
    writeSteam.write('\n----- New Chunk -----\n');
    writeSteam.write(chunk);
});