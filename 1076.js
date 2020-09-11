const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

let arr = [];

rl.on("line", (input) => {
  arr.push(input);
  if (arr.length > 2) {
    let answer = "";
    arr.forEach((item, idx) => {
      let value = data.indexOf(item);
      if (idx > 1) {
        answer *= Math.pow(10, value);
      } else {
        answer += value;
      }
    });
    console.log(answer);
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
