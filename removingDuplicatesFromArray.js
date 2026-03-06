// Program Task -> Remove duplicates(elements) from an array

function removeDuplicates(array){

    let duplicateFreeArray = [];

    for (let element of array){
        if(duplicateFreeArray.includes(element)===false){
            duplicateFreeArray.push(element)
        }
    }
return duplicateFreeArray;
}
let result = removeDuplicates([1,2,2,3,4,4])
console.log(result);