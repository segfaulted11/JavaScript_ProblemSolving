//Program Task -> Count even numbers in array
function countEvenNumbers(array){
let count = 0;
for (let element of array){
    if(element % 2 ===0){
        count++;
    }
}
return count;
}
let result = countEvenNumbers([1,2,3,4,6,8,11,16,18,20])
console.log(result);//7

//Program Task -> Count odd numbers in array
function countOddNumbers(array){
let count = 0;
for (let element of array){
    if(!(element % 2 ===0)){
        count++;
    }
}
return count;
}
let result2 = countOddNumbers([1,2,3,4,6,8,11,16,18,20])
console.log(result2);//3