const list = [1, 2, 6, 5, 6, 235, 21, 234, 65, 90];
// 짝수인지 아닌지 하나하나 계산해서 리스트로 만들어 보여주기
const listTwo = list.map((elem) => {
  return elem % 2 === 0;
});
// for (i in list) {
//   const elem = list[i] % 2 === 0 ? true : false;
//   listTwo.push(elem);
// }
console.log(listTwo);
