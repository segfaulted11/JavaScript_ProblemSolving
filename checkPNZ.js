// Program Task -> check if a number is positive, negative or zero.

function check(number){

if(typeof number != "number" || Number.isNaN(number) || !Number.isFinite(number)){
    return "Error"
}

if(number>0){
    return "Positive";
}if(number<0){
    return "Negative";
}if(number ===0){
    return "Zero"
}

 }
 let result = check()
 console.log(result);