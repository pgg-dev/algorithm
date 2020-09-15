const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = [];

rl.on("line", (input) => {
  num.push(parseInt(input));
  if (num.length === 9) {
    const max = Math.max(...num);
    console.log(max);
    console.log(num.indexOf(max) + 1);
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
