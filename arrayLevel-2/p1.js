// Shift all zeros to end 

let array = [1, 0, 2, 0, 3]

let notZeroArray = [];
let ZeroArray = [];

for (let element of array){
    if(element!==0){
        notZeroArray.push(element)
    }
    if(element===0){
        ZeroArray.push(element)
    }
}

let finalArray = [...notZeroArray,...ZeroArray]
console.log(finalArray);