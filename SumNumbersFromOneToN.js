// Program Task -> find the Sum of numbers from 1 → n
function sum(number){
let sum = 0;
  for (let i = number; i>=1; i--){
    /*   console.log(i)
         output -> 
        5
        4        
        3        
        2        
        1   
    */
 
        sum += i;
    }
return sum;
}
let result = sum(5)
console.log(result)