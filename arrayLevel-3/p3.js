// Find the first repeating element

function firstRepeatingElement(array){

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
    return arrayWithOutTheDuplicates[0];
}
}
console.log(firstRepeatingElement([2,3,2,5,4,3,2,5]))