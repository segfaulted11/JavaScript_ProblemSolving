// Swap first and last element

function swap(array){

let firstElement = array[0]
let lastElement = array[(array.length-1)]

array[0] = lastElement;
array[(array.length-1)] = firstElement;

return array;
}
let result = swap([1,2,3,4])
console.log(result);