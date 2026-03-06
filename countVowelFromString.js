function check(string){
    const vowels = "AEIOUaeiou";
    let count = 0;

    for (let i = 0; i < string.length; i++){
        if (vowels.includes(string[i])){
            count++;
        }
        /* for checking how many consonats r there
        if (!vowels.includes(string[i])){
            count++;
        }
        */
    }

    return count;
}

console.log(check("WHMiou"));