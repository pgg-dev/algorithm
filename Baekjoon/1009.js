const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = input.shift();
for (let i = 0; i < T; i++) {
  let [a, b] = input[i].split(" ").map((i) => Number(i));
  let d = 1;
  /*
  1 -> 1
  2 -> 2
  3 -> 3
  4 -> 4
  5 -> 1
  */
  for (let j = 0; j < (b % 4) + 4; j++) {
    d = (d * a) % 10;
  }
  console.log(d === 0 ? 10 : d);
}

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let input = [];
// rl.on('line', function (line) {
//     input.push(line);
//     if (input.length > Number(input[0])) {
//         const results = input.slice(1).map(line => {
//             const [a,b] = line.split(' ');
//             const num = Math.pow(a, b%4+4).toString();
//             return num[num.length-1];
//         })
//         results.forEach(v => {
//             if (v <= 0) {
//                 console.log(10);
//             } else {
//                 console.log(v)
//             }
//         });
//         rl.close();
//     }
// })
// .on('close', function () {
//     process.exit();
// });
