// Move negatives to one side

let array = [1,-2,3,-4,5]

let newArray = [];
let newArray2 = [];

for (let el of array){
    
    if(el>0){
        newArray.push(el)
    }
    else if(el<0){
        newArray2.push(el)
    }
    
}
let finalArray = [...newArray2,...newArray]
console.log(finalArray);