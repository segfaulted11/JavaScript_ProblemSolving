// Porgram Task -> Filter numbers greater than 10

function filterNumberGreaterThanTen(array){
    let newArray = [];
    for (let element of array){
        if (element>10){
            newArray.push(element)
        }
    }
return newArray;
}
let result = filterNumberGreaterThanTen([5,12,8,20])
console.log(result);