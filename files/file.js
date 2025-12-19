// import fs from 'fs'; built-in module on nodejs
const fs = require('fs');

// Reading File
// fs.readFile(2 arguments: path, callback(function(err, data){}) );
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // Buffer data
//         console.log(data);
//         // Convert to string
//         console.log(data.toString());
//     }
// });

// console.log('Last line of code');

// Writing File
// 3 arguments: path, data, callback(function(){})
// blof1 will be overwritten
// fs.writeFile('./docs/blog1.txt', 'Hello, this is blog1.', () => {
//     console.log('File was written.');
// });

// Append File
// fs.writeFile('./docs/blog2.txt', 'Hello, this is blog2.', () => {
//     console.log('File was written.');
// });

// Directories
// fs.mkdir creates a new directory
// 2 arguments: path, callback(function(err){})
// repeatedly creating the same directory will throw an error
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Directory created.');
//     }
// });

// existsSync checks if a directory exists
// mkdir create a directory or rmdir to remove a directory
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Directory created.');
//         }
//     });
// } else {
//     // console.log('Directory already exists.');
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Directory deleted.');
//         }
//     });
// }

// Deleted Files
// unlink removes a file
// if (fs.existsSync('./docs/blog2.txt')) {
//     fs.unlink('./docs/blog2.txt', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('File deleted.');
//         }
//     });
// }

// Create a file
if (!fs.existsSync('./explain.txt')) {
    fs.writeFile('./explain.txt', 'Hello World', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created.');
        }
    });
}