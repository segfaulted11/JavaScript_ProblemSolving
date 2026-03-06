// Program Task -> Find the Maximum number(element) from an array of numbers.

function findTheLargestElement(array){
    const largest = Math.max(...array);
    return largest;
}
let result = findTheLargestElement([2,7,1,9,4])
console.log(result);


// Program Task -> Find the Minimum number(element) from an array of numbers.
function findTheLowestElement(array){
    const largest = Math.min(...array);
    return largest;
}
let result2 = findTheLowestElement([2,7,1,9,4])
console.log(result2);

