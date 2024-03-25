const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

const isAdultList = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  isAdultList.push({ ...student, isAdult: student.age > 19 });
}

console.log(isAdultList);

const ageUp = [];

// for (let i = 0; i < students.length; i++) {
//   const obj = { ...students[i], age: students[i].age + 1 };
//   ageUp.push(obj);
// }

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   const { age } = student;
//   const obj = { ...student, age: age + 1 };
//   ageUp.push(obj);
// }

// console.log(ageUp);
