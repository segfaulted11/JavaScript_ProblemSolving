function maxDifference(array){

let largest = Math.max(...array);
let lowest = Math.min(...array);

let findmaxDiff = largest - lowest;

return findmaxDiff;
}
let result = maxDifference([2,3,10,6])
console.log(result);