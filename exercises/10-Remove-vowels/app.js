
const rapid = (myString) => {
    let consonants = [];
    for(let letter of myString){
        if(['a','e','i','o','u'].includes(letter.toLowerCase()) == false)
            consonants.push(letter.toUpperCase());
    }
    return consonants.join('');
};

// Work above this line; do not change code below
let str = "Jhon";
console.log(rapid(str));
