// Program Task-> add all numbers in the array and print the absolute value of the total sum.

let numbers = [1,2,-3,-4,-5]

let sum = 0;
for (let i = 0; i<=numbers.length-1; i++ ){
    sum += numbers[i]
}
console.log(sum)//-9
console.log(Math.abs(sum))//9