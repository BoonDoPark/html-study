let text = "hi";
text = 1;

function sum(a, b) {
  return a + b;
}

const sum1 = (a, b) => {
  return a + b;
};
console.log(sum("hi", 2)); // hi2 NaN

const print = (i) => {
  console.log("print");
  return i === 2;
};

if (print(2) && print(3)) {
}

if (sum(2, 3) == 5 && sum(4, 1) >= 5) {
  console.log("asd");
}

const ppp = print(2) && 7;
console.log(ppp); // 7

const ppp2 = print(1) && 7;
console.log(ppp2); //false

const arr = [1, 2, 3, 4, 5];

arr.sort; // sort
arr.map; // 원본을 가공
arr.filter; // 거를때

const obj = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () =>
    `${obj.name} ${obj.age} ${obj.gender === 1 ? "남자" : "여자"}`,
};

const g = obj.gender === 1 ? "남자" : "여자";
console.log(obj.toString());

console.log(obj.address); // undefined
console.log(obj.address?.city); // undefined
console.log(obj.address ? obj.address.city : obj.address); // undefined
console.log(obj.address.city && obj.address); // undefined

const arr2 = ["김부자", "김세현", "김잼민"];
const [p1, p2, p3] = arr2;

const obj2 = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () =>
    `${obj.name} ${obj.age} ${obj.gender === 1 ? "남자" : "여자"}`,
};

const { name, age, gender } = obj2;
const makePerson = (name, age) => {
  return { name, age };
};
console.log(makePerson("이수진", 20));

const isAdult = ({ name, age }) => {
  return { name: name, age: age, isAdult: age > 20 };
};

const 이수진 = makePerson("이수진", 20);
console.log(isAdult(obj2));
