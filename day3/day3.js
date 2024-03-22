// (list, arr), object
// int[] arr = new int[123];
// List<Integer] list = new ArrayList<>();
const list = [];
// arr[0] = 1;
// list.add(1);
for (let i = 1; i <= 10; i++) list.push(i);
console.log(list[0]);
console.log(list.length);

// 3 6 9
const list2 = []; // 100~1000
const list369 = []; // 369 리스트 만들기
for (let i = 100; i <= 1000; i++) {
  list2.push(i);
}
console.log(list2.length);

for (i = 0; i < list2.length; i++) {
  const num =
    ("" + list2[i]).includes("3") ||
    ("" + list2[i]).includes("6") ||
    ("" + list2[i]).includes("9")
      ? "짝"
      : list2[i];
  list369.push(num);
}
console.log(list369);
