// Program Task -> calculate the sum of all the elements of an array.

function sumOfTheElements(array){

if(Array.isArray(array)){
    let sum = 0;
for (let i=0; i < array.length; i++){
    // console.log(array[i]);
    /* output ->
    1
    2
    3
    4
    */
   sum += array[i]
}
return sum;//10
}else{
    return "ERROR! enter an actual array pls!"
}
}
let result = sumOfTheElements([1,2,3,4])
console.log(result);