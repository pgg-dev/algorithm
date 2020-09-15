const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on("line", (input) => {
  arr.push(parseInt(input));
  if (arr.length === 7) {
    const odd = arr.filter((num) => num % 2);
    const sum = odd.reduce((acc, num) => (acc += num), 0);

    if (sum) {
      console.log(sum);
      console.log(Math.min(...odd));
    } else {
      console.log(-1);
    }
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
