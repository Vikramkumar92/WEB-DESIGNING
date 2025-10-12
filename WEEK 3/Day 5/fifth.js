/*Function - It is a block of code that perform some work
like on console log function always print the code*/

function ApnaCollege(){
    console.log("Welcome to the Apna College");
}
ApnaCollege();
ApnaCollege();

//Passing Parameter 
function myFunction(msg){
    console.log("hello")
}
myFunction(159);

//ARROW FUNCTION
/*Ques - Let's create a multiplyof two number by arrow function*/
const Multiply=(a,b) =>{
    console.log(a*b);
}
Multiply(5,74.8);

/*Ques - Create a function using "function" keyword that takes a string as an argument and return the 
No. of vowel in string */
function NoOfVowel(string){
    let count =0;
    for(let i=0;i<string.length;i++){
        let ch=string[i];
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;
        }
    }
    console.log(string.length)
    console.log(count);
}
NoOfVowel("college");

/*To print each index of array without using for loop . For this we use 'for each'.
It is also known as Higher Order Method or Higher order Function.*/

let arr=["pune","Delhi","Mumbai","Agra"];
arr.forEach((val) =>{
    console.log(val.toUpperCase());
})

/*Ques - For any given number print the square of each number using ForEach loop*/
let Number=[1,2,3,4,5];
Number.forEach((Number) =>{
    console.log(Number*Number);
});

/*Map - It creates a new array with the result of some operation.The value its callback return are 
used to form a new array. Esme index ke sath print hota h*/
let newArray=Number.map((Number) =>{
    return Number;
})
console.log(newArray);

/*Filter - It creates a new array with filtered value */
let evenArray=Number.filter((Number) =>{
    return Number>3;
})
console.log(evenArray);