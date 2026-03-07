let numbers = [3, 7, 2, 9, 5];
let largest = numbers[0];

console.log(largest);//3

for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
}
console.log(largest);//9