const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const arr = Array(parseInt(input))
    .fill(1)
    .map((x, y) => x + y);
  let answer = [];

  for (let i = 0; i < input; i++) {
    answer.push(arr.shift());
    arr.push(arr.shift());
  }
  console.log(answer.join(" "));
  rl.close();
}).on("close", () => {
  process.exit();
});
