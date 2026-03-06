// Program Task -> Filter adults
function filterAdults(array){
    let display;
for (let element of array){
    for (let key in element){
        if (key==="age" && element[key]>=18){
            display = `${element.name}'s age is ${element.age}. So, they are an adult!`
        }
    }
}
return display;
}

let result = filterAdults([
{name:"JW",age:11},
{name:"JK",age:20}
])
console.log(result);