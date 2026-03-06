// Program -> Reverse a String

// solving using for loop ->
function reverseTheString(inputString){

    if(typeof inputString === "string"){

        let finalString = "";
        for (let i = inputString.length - 1; i>=0; i--){
            finalString = finalString + inputString[i];
        }
        return (finalString);
    }else{
        return 'enter a valid string';
    }
}

// console.log(reverseTheString("JABIR"))//RIBAJ
// console.log(reverseTheString("JABIR the unbothered"))//derehtobnu eht RIBAJ


// Another way of solving this (using string n array methods) -> 

function reverseTheString2(inputString2){

    if(typeof inputString2 === "string"){

        let splitTheString = inputString2.split("")//'split' is a string method and its going to split the string separating by quotation and convert it into an array consisting them.
        // console.log(splitTheString, typeof splitTheString);//[ 'J', 'A', 'B', 'I', 'R' ], object(array)

        let reverseTheArray = splitTheString.reverse()//now reversing the all elements of the array using the array method 'reverse'
        // console.log(reverseTheArray);//[ 'R', 'I', 'B', 'A', 'J' ]

        let concateAllTheElements = reverseTheArray.join("")//now, returning a new string by concatenating all the elements of an array
        // console.log(concateAllTheElements,typeof concateAllTheElements);//RIBAJ,string

        return concateAllTheElements

    }else{
        return 'enter a valid string';
    }
}
console.log(reverseTheString2("JABIR"))//RIBAJ