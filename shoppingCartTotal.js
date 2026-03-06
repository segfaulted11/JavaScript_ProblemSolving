// Porgram Task -> two objects are there in an array as the elements of the array. and each object has two respective properties named as item and price. now make a program that shows the summation of the prices.
function shoppingCartTotal(array){
    let sum = 0;
for (let element of array){
    for (let key in element){
        if (typeof (element[key])==="number"){
            sum += element[key]
        }
    }
}
return sum;
}

let result = shoppingCartTotal([
{item:"phone",price:500},
{item:"case",price:20}
])
console.log(result);//520