function addStrings(string){
  let sum = "";
for (let i =0; i<string.length; i++ ){

    sum = sum + string[i]
    console.log(sum)
    /*output ->
    J
    JA 
    JAW
     */

    console.log(string[i])
    /* output -> prints all the letters line by line.
    J
    A
    W
    */
}
return sum;//ouput -> JAW, sums all the letters in one line
}
console.log(addStrings("JAW"))