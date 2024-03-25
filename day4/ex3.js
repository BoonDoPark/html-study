const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

const isAdultList = students.map((v) => {
  console.log(v);
  return { ...v, isAdult: v.age > 19 };
});
// console.log(isAdultList);

const ageUpFunction = (v) => ({ ...v, age: v.age++ });
const ageUp = students.map((v) => {
  ageUpFunction(v);
  return { ...v, age: ++v.age };
});
// console.log(ageUp);

const adultList = students.filter((v) => {
  return v.age > 19;
});
// console.log(adultList);

const kimList = students.filter((v) => v.name.includes("김"));
// console.log(kimList);

//sort
const ageAsc = students.sort((a, b) => b.age - a.age);
console.log(ageAsc);
