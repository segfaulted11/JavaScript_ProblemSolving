function addDigits(number){

    number = number.toString(); // number = string(number);

    let allTogether =0;
    for (let i =0; i<number.length; i++ ){
        allTogether += Number(number[i]);
    }

    return allTogether;
}
console.log(addDigits(2567));//20
console.log(addDigits("2567"));//20