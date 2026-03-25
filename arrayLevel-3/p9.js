// Find missing number(s) from 1 to n (return the number(s) that is missing from the sequence)

// Input:
// [1,2,5]
// Output:
// 3 and 4

let array = [1,2,5]

for (let i = 1; i<=5; i++){
    if(!(array.includes(i))){
        console.log(i);
    }
}