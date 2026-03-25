// Separate even and odd numbers -->

// Input:
// [1,2,3,4,5,6]
// Output:
// [2,4,6,1,3,5]

let array = [1,2,3,4,5,6]

let even = []; 
let odd = []; 

for (let el of array){
    if(el%2===0){
        even.push(el)
    }
    else{
        odd.push(el)
    }
}
let finalArray =[...even,...odd];
console.log(finalArray);