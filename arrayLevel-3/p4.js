// Find the first non-repeating element

function firstNonRepeatingElement(array){

for (let el of array){
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
    return arrayWithTheDuplicates;
}
}
console.log(firstNonRepeatingElement([4,5,1,2,0,4]))