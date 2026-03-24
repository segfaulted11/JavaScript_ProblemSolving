//Delete an element at specific position 

let array = [1,2,3,4]

array.splice(2,1)

console.log(array);//[ 1, 2, 4 ]

//insert an element at specific position 

let array2 = [1,2,4]

array2.splice(2,0,3)

console.log(array2);//[ 1, 2, 3, 4 ]