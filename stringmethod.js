
// 1. Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase().Return true if the strings are the same, otherwise return false.
function CompareTwoStrings(str1, str2) {
    let compareStr = str1.toLowerCase() === str2.toLowerCase();
    return compareStr;
}

console.log(CompareTwoStrings("hello", "HELLO"));
console.log(CompareTwoStrings("Hello", "World"));

// output: 
// true
// false
// ------------------------------------------------------------------------------------------

// 2. Create a function that checks if a given sentence contains the word "JavaScript" using the includes() method. Return a message indicating whether the word is found.

function checksWordIncludes(checkSentence) {
    if(checkSentence.includes("JavaScript")){
        return "JavaScript word is found.";
    }
    else{
        return "JavaScript word not found.";
    }
}
console.log(checksWordIncludes("JavaScript is a programming language."));
console.log(checksWordIncludes("C is a programming language."));

// output:
// JavaScript word is found.
// JavaScript word not found.

// ------------------------------------------------------------------------------------------

// 3.Write a function that splits a sentence into an array of words using split(). Then, use join() to covert the array back into a sentence, separating the words with hyphens(-).

function splitSentenceJoin(sentence) {
   let result = sentence.split(" ");
   return result.join("-");
   
}
console.log(splitSentenceJoin("Programming Language is important for developers"));

// output:Programing-Language-is-important-for-developers

// ------------------------------------------------------------------------------------------

// 4.Create a function that takes a string and extracts a portion using slice(). The function should take a start and an end index as arguments and return the sliced part.

function usingSlice(str, start, end) {
    let slicedPart = str.slice(start, end);
    return slicedPart;

}
console.log(usingSlice("My name is Alice", 11, 16));

// output:Alice

// ------------------------------------------------------------------------------------------

// 5.Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.

let person = {
    fullname: "John Doe",
    email: "john@gmail.com",
    age: 30,
};
let {fullname, email, age} = person;
console.log(fullname);
console.log(email);
console.log(age);

// output:
// John Doe
// john@gmail.com
// 30
