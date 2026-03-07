// Program -> Find the longest word in a sentence

function findTheLongestWord(string){
let splitTheStringIntoArray = string.split(" ");
let longestElement = splitTheStringIntoArray[0];

for (let elements of splitTheStringIntoArray){
    if(elements.length>longestElement.length){
        longestElement = elements;
    }
}
return longestElement;
}
console.log(findTheLongestWord("I love programming and girls"));//programming