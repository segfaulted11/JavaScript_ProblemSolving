// Program Task -> Group numbers into even & odd

/* expected output ->
let obe = {
even:[2,4],
odd:[1,3]
}
*/

function oddAndEven(array){

let obj ={
    even : [] ,
    odd : []
}

for (elements of array){
    if(elements%2 === 0){
        obj.even.push(elements)
    }
    if(!(elements%2 === 0 )){
       obj.odd.push(elements)
    }
}
return obj
}
let result = oddAndEven([1,2,3,4])
console.log(result);//{ odd: [ 1, 3 ], even: [ 2, 4 ] }


//if only the object declaration exists ->

function oddAndEven(array) {

let obj = {}

for (let elements of array) {

    if (elements % 2 === 0) {
        if (!obj.even) {
            obj.even = []
        }
        obj.even.push(elements)
    } else {
        if (!obj.odd) {
            obj.odd = []
        }
        obj.odd.push(elements)
    }
}
return obj
}
console.log(oddAndEven([1,2,3,4]))//{ odd: [ 1, 3 ], even: [ 2, 4 ] }