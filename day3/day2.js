// let 변하는 변수, const 상수
// let i = 0;
// const i = 0;

for (let i = 0; i < 10; i++) {
  if (i === "0" && i % 2 == 0) console.log(i);
  else if (i === 0) console.log(true);
}

if ("true" == true) console.log("같다");

// 2~100 소수 탐색
// for (let i = 2; i <= 100; i++) {
//   if (i / 2 == 1 || i / 3 == 1 || i / 5 == 1 || i / 7 == 1) console.log(i);
//   else if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) console.log(i);
// }

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i / 2; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
