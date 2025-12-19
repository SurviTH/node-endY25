// modules/modules.js exports
// const mods = require('./people');

// console.log(mods);
// console.log(mods.people);

// extracting from the imported module
const { people, ages } = require('./people');

// console.log(people);
console.log(people, ages);

// Built-in modules
const os = require('os');
console.log(os.platform(), os.homedir());