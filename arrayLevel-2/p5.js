//Split array into two halves

let array = [1,2,3,4,5,6,7,8,9,10,11]

let array1 = [];
let array2 = [];

let middleIndex = (array.length/2)

if((array.length%2)===0){

for (let i =0; i<middleIndex; i++){
    array1.push(array[i])
}
for (let i=middleIndex; i<=array.length-1; i++){
    array2.push(array[i])
}
}else{

    let x = Math.ceil(middleIndex)//3

    for(let i=0; i<x; i++){
        array1.push(array[i])
    }
    for (let i=x; i<array.length; i++){
        array2.push(array[i])
    }
}

console.log(array1);
console.log(array2);