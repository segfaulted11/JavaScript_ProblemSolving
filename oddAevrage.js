// let array = [1,2,3,4,5]

// using for loop
// for (let i = 0; i<array.length; i++){
//     // for getting the even numbers
//     // if (array[i] % 2 === 0){
//     //     console.log(array[i])
//     // }

//     // for getting the odd numbers
//     // if(array[i] % 2 != 0){
//     //     console.log(array[i])
//     // }
// }

// using for of loop
// for (let number of array){

//     // for getting the even number 
//     // if (number % 2 === 0){
//     //     console.log(number)
//     // }

//     //for getting the odd number
//     // if (number % 2 !=0){
//     //     console.log(number)
//     // }
// }


let array = [1,2,3,4,5]

function oddAverage(array){
    let oddNumbers = [];//declaring an array

    // getting the odd numbers from the array
    for (let number of array){
        if(number % 2 != 0){
        // console.log(number)1,3,5
        oddNumbers.push(number)//pushing the odd numbers in the array
    }  
}
// console.log(oddNumber)//[ 1, 3, 5 ]

let sum = 0

// getting the sum
for ( eachNumber of oddNumbers){
    // console.log(odd)//prints 1, 3 and 5 consecutively
     sum = sum + eachNumber
    }
    // console.log(sum)//9

// getting the avearge

let avg = sum/oddNumbers.length
// console.log(avg)// 3

return `the average is ${avg}`;
}

let avg = oddAverage(array)
console.log(avg)