//Delete all instances of a specific number


function remeveASpecific(array,number){

let finalArray = [];

for (let el of array){
    if(el !==number){
        finalArray.push(el)
    }
}
return finalArray;
}
let result = remeveASpecific([1,2,3,2,4],2)
console.log(result);