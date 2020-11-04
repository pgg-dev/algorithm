const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [N, K] = input.split(" ").map((num) => parseInt(num));
  let arr = Array(parseInt(N))
    .fill(1)
    .map((x, y) => x + y);

  let answer = [];
  let count = 0;

  while (arr.length) {
    count++;
    const shift = arr.shift();
    if (count === K) {
      answer.push(shift);
      count = 0;
    } else {
      arr.push(shift);
    }
  }

  console.log(`<${answer.join(", ")}>`);

  rl.close();
}).on("close", () => {
  process.exit();
});
