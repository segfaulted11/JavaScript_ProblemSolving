// Find common elements in 3 arrays (Elements present in ALL three arrays)

// Input:
// [1,2,3]
// [2,3,4]
// [2,5,3]
// Output:
// [2,3]

let array1 = [1,2,3]
let array2 = [2,3,4]
let array3 = [2,5,3]

let fourthArray = [];

let finalArray = []

for (let el of array1){
    if((array2.includes(el))){
        fourthArray.push(el)
    }
}

for (let el of array3){
    if((fourthArray.includes(el))){
        finalArray.push(el)
    }
}

console.log(finalArray);