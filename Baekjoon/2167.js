const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on("line", (input) => {
  arr.push(input);

  rl.close();
}).on("close", () => {
  process.exit();
});
