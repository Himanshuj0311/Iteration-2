// greet.js
const name = process.argv[2];
if (!name) {
  console.log("Usage: node greet.js <name>");
} else {
  console.log(`Hello, ${name}!`);
}
