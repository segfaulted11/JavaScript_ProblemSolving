// Rotate array left/right by 1 -->

// Left rotation:
// [1,2,3,4] → [2,3,4,1]

let array = [1,2,3,4]

let returnFirstDelElement = array.shift()

array.push(returnFirstDelElement)

console.log(array);


// Right rotation:
// [1,2,3,4] → [4,1,2,3]

let array2 = [1,2,3,4]
let returnLastDelElement = array2.pop()

array2.unshift(returnLastDelElement)

console.log(array2)