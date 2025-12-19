const name = "World";
console.log(`Hello, ${name}!`);

const greet = (name) => {
    // return `Hello, ${name}!`;
    console.log(`Hello, ${name}!`);
}

greet("Alice");

global.setTimeout(() => {
    console.log("This message is displayed after a delay.");
}, 3000);

global.setInterval(() => {
    console.log("This message is displayed every 2 seconds.");
}, 2000);