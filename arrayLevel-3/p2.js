//Find duplicates in array --->

// Return elements that appear more than once


function findDuplicates(array){
    let arrayWithTheDuplicates = [];

    let arrayWithOutTheDuplicates = [];

    for (el of array){
        if(!(arrayWithTheDuplicates.includes(el))){
            arrayWithTheDuplicates.push(el)
        }
        else{
            arrayWithOutTheDuplicates.push(el)
        }
    }
    return arrayWithOutTheDuplicates;
}
console.log(findDuplicates([1,2,3,2,4,1]));