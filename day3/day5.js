// javascipt(x) java(type)
// java 어떤 기능을 호출하려면 method
// js function
// public int sum(int a, int b) return a+b;
function sum(a, b) {
  return a + b;
}

const sum1 = (a, b = 1) => {
  return a + b;
};

// console.log(sum1(1));

function diff(a, b) {
  return a - b;
}

const diff1 = (a, b) => a - b;

const division = (a, b) => a / b;

// console.log(sum1(1, 2), diff1(2, 1));
// sum2(3) : 5 -> diff2(5) : 3 ->
// sum2(2, 10) : 13 -> diff(13,4) -> 9
const sum2 = (a, b = 2) => a + b;
const diff2 = (a, b = 2) => a - b;
const multi2 = (a, b = 2) => a * b;
const divis2 = (a, b = 2) => a / b;

console.log(diff2(sum2(diff2(sum2(3)), 10), 4));
let total = 0;
const list = [diff2, sum2, multi2, divis2, (a) => a * a];
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
console.log(total);

const pow = list[4];
const [sum3, diff3] = list;
console.log(sum3(1, 3));
