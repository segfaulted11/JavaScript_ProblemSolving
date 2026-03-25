//Find union of two arrays (Combine both arrays without duplicates) -->

// Input:
// [1,2,3]
// [3,4,5]
// Output:
// [1,2,3,4,5]


let array1 = [1,2,3]
let array2 = [3,4,5]

let finalArray = [];

for (let el of array1){
    finalArray.push(el)
}
for (let el of array2){
    if(!(finalArray.includes(el))){
    finalArray.push(el)
  }
}
console.log(finalArray);