// //  Program Task1 -> Filters students who scored 90 or more marks.


// function filterNintyOrMoreMarks(array){
    // const newArray = [];
// for (let objectElements of array){
//     for (let keys in objectElements){
//         if (keys === "marks" && objectElements[keys]>=90){
//                newArray.push(objectElements)
//         }
//     }
// }
// return newArray;
// }
// let result = filterNintyOrMoreMarks([
//     {id : "11011", marks : 99},
//     {id : "11111", marks : 90},
//     {id : "11001", marks : 85},
//  ])
// console.log(result);


// ---------------------------------------------------------------------------------------

// //  Program Task2 -> Find the maximum marks. return "maximum marks = xyz"

// w/o for...in version ->
/*
for (let objects of array){
    if(objects.marks != undefined){
        console.log(objects.marks)
    }
}*/

// function findTheMaximumMark(array){
    //     let marksArray = []

//     for (let objectElements of array){
    //        for (let keys in objectElements){
        //         if(keys==="marks"){
            //             marksArray.push(objectElements[keys])
//         }
//        }
//     }
// let findMax = Math.max(...marksArray)
// let display = `Maximum Number is ${findMax}`
// return display;
// }
// let result = findTheMaximumMark([
//     {id : "11011", marks : 99},
//     {id : "11111", marks : 90},
//     {id : "11001", marks : 85},
//  ])
// console.log(result);

// ---------------------------------------------------------------------------------------

// // Program Task3 -> Find how many students have marks over 90.

// function numbersOfStudents(array){
//     let marksArray = []
// for(let objects of array){
//     if(objects.marks>=90){
//         marksArray.push(objects.marks);
//     }
// }
// let arrayLength = marksArray.length
// let display = `The number of students got over 90 is ${arrayLength}`
// return display;
// }
// let result = numbersOfStudents([
//     {id : "11011", marks : 99},
//     {id : "11111", marks : 90},
//     {id : "10111", marks : 91},
//     {id : "10001", marks : 88},
//     {id : "11000", marks : 87},
//     {id : "10000", marks : 97},
//  ])
// console.log(result);

// ---------------------------------------------------------------------

// // Program Task4 -> Collect the IDs of all the students.

// function collectIDs(array){
//     let idArray = []
//     for (let objects of array){
//         idArray.push(objects.id)
//     }
// return idArray;
// }
// let result = collectIDs([
//     {id : "11011", marks : 99},
//     {id : "11111", marks : 90},
//     {id : "10111", marks : 91},
//     {id : "10001", marks : 88},
//     {id : "11000", marks : 87},
//     {id : "10000", marks : 97},
//  ])
// console.log(result);


// ---------------------------------------------------------------------

// Program Task-5 -> add +5 marks to every student.

function addMarks(array){

for (let objects of array){
 objects.marks = objects.marks + 5
}
return array;
}
let result = addMarks([
    {id : "11011", marks : 99},
    {id : "11111", marks : 90},
    {id : "10111", marks : 91},
    {id : "10001", marks : 88},
    {id : "11000", marks : 87},
    {id : "10000", marks : 97},
 ])
console.log(result);