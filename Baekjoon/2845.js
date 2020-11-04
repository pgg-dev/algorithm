const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr.push(input.split(" "));

  let answer;
  let total;

  arr.forEach((item) => {
    if (item.length === 2) {
      total = item.reduce((acc, num) => acc * num, 1);
    } else {
      answer = item.map((item) => item - total).join(" ");
      console.log(answer);
      rl.close();
    }
  });
}).on("close", () => {
  process.exit();
});
