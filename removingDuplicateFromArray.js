let array = [11,12,13,14,13,13,15,15];

function noDuplicate(parameterArray){

    let newArray = [];

    for(let eachNumber of parameterArray){
        if (newArray.includes(eachNumber)===false){
            newArray.push(eachNumber)
        }
    }
return newArray;//[ 11, 12, 13, 14, 15 ]
}

let xyz = noDuplicate(array)
console.log(xyz)