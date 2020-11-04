const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr.push(input.split(""));

  if (arr.length > 7) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i % 2; j < arr[i].length; j += 2) {
        arr[i][j] === "F" && count++;
      }
    }
    console.log(count);
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
