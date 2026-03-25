//Find intersection of two arrays (Common elements in both arrays)

// Input:
// [1,2,3,4]
// [3,4,5,6]
// Output:
// [3,4]


let array1 = [1,2,3,4]
let array2 = [3,4,5,6]

let finalArray = [];

for (let el of array1){
    if(array2.includes(el)){
        finalArray.push(el)
    }
}
console.log(finalArray);