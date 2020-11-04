const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on("line", (input) => {
  arr.push(input);

  if (arr.length > 4) {
    const [L, A, B, C, D] = arr;
    const answer = L - Math.ceil(Math.max(A / C, B / D));
    console.log(answer);
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
