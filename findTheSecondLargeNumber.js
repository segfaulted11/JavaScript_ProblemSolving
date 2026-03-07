// Program -> Finds the second large number

function secondLargestNumber(array){
let newArray = [...array]//creating a new array (by coping the given one btw) so that the og array doesnt mutate.
let max = Math.max(...newArray)
let index = newArray.indexOf(max)
newArray.splice(index,1)
let secondMax = Math.max(...newArray)
return secondMax;
}
console.log(secondLargestNumber([3,7,2,9,5]));

