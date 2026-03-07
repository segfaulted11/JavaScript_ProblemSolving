// Program -> Reverse words in sentence

function reverseWords(string){
let split = string.split(" ")
let reverse = split.reverse()
let join = reverse.join(" ")
return join;
}
console.log(reverseWords("I love JS"))
