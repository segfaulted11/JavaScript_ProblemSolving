//Remove duplicates in array (Return elements that dont appear more than once)

function removeDuplicate(array){
    let arrayWithOutTheDuplicates = [];

    for (el of array){
        if(!(arrayWithOutTheDuplicates.includes(el))){
            arrayWithOutTheDuplicates.push(el)
        }
    }
    return arrayWithOutTheDuplicates;
}
console.log(removeDuplicate([1,2,3,2,4,1]));