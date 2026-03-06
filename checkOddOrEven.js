function checkOddOrEven(number){
    // edge cases
    if(typeof number !="number"){
        return ("ERROR! Enter an actual number!")
    }
    if(Number.isNaN(number)){
        return ("ERROR! NaN is valid!")
    }
    if(!Number.isFinite(number)){
       return ("ERROR! Enter an finite number!")
   }
    if(!Number.isInteger(number)){
        return ("ERROR! Enter an integer!")
    }

    // actual logic
    if(number % 2 === 0){
        return (`${number} is even`);
    }else{
        return (`${number} is odd`);
    }
}

let result = checkOddOrEven(22)
console.log(result);

