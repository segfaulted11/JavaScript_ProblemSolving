// Programm Task -> Count the number of words in sentence.

// soution - 1
let string = "JS is fun to learn"
let split = string.split(" ")
console.log(split.length)

// solution -2
let string2 = "JS is fun to learn"

let count = 1;//because theres no space before the first word
for (let character of string2){
    if(character === " "){
        count ++;
    }//since the words are separated by space, so whenever a space comes it means a new word would start after it.
}
console.log(count)