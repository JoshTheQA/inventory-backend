// You should already know:
// HTML, CSS, and Javascript
// Possibly experience with other libraries (jQuery, Bootstrap, etc) and frameworks (Angular, React, etc)

// How Node.js differs from Vanilla Javascript
// 1) Node runs on a server - not a browser. (Backend not frontend)
// 2)The console is the terminal window that you can use to interact with the server.
console.log('Hello World');
// 3) global object in stead of window object
// console.log(global);
// 4) Has Common Core modules - built in modules that are available to all Node.js applications.
// 5) Has CommonJS modules - modules that are written in CommonJS style.
// 6) Missing some JS API calls like fetch, setTimeout, etc.

// const os = require('os');
// const path = require('path');
const { add, subtract, multiply, divide } = require('./math');


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));