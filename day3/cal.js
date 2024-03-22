const cal = [
  0,
  (a) => {
    cal[5].push(a);
    cal[0] += a;
  },
  (a) => {
    cal[5].push(a);
    cal[0] -= a;
  },
  (a) => {
    cal[5].push(a);
    cal[0] *= a;
  },
  (a) => {
    cal[5].push(a);
    cal[0] /= a;
  },
  [],
];

cal[1](4);
cal[2](1);
cal[3](10);
cal[4](2);
cal[1](4);
const [total] = cal;
console.log(cal[5], cal[0] === total);
