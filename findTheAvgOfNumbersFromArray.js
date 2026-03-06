// Program Task -> Find the average of numbers

function findTheAverage(array) {
    let sum = 0;
    for (let element of array){
        sum += element;
    }
    let average = sum/array.length;
    return average;
}
let result = findTheAverage([10,20,30])
console.log(result);//20