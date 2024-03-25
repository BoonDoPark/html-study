// object {}
const obj = { age: 10, print: () => console.log(obj["age"]) };
obj["name"] = "park";
console.log(obj);
obj["print"]();
for (let i = 1; i <= 10; i++) {
  obj[i - 1] = i;
}
console.log(obj);

const classRoom = {
  students: [
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],
  manager: [{ name: "송희", age: 30 }],
}; // json

console.log(classRoom.students[1].name);

const list = [];

for (let i = 0; i < 10; i++) {
  list[i] = i;
}

classRoom["list"] = list;
classRoom.list[0] = 100;

console.log(classRoom);
