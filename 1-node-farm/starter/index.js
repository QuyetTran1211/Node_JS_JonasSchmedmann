const fs = require('fs');
const { text } = require('stream/consumers');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);
// const hello = 'Hello World';
// console.log(hello);

const textOut = `This is what we know about avocado: ${textIn}\n Created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);

console.log('File written')