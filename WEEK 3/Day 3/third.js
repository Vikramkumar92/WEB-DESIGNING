/*LOOPS - It is used to execute a code multiple times.
For loop , While loop ,Do-While loop:*/
for(let count=1;count<=5;count++){
    console.log("Apna College");
}
// let i = 0;
while (i<60000) {
    console.log(i)
    i++;
}

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);

//Calculate the sum of numbers  from 1 to 5
let sum=0;
for(let i=1;i<=100;i++){
    sum=sum+i;
}
console.log("sum = ",sum);

// for(let i=1;i>=0;i++){
//     console.log("i = ",i);
// }

//For of loop - Esme  string ke sbhi word pr loop lgta h
let str="Apna College";
for(let x of str){
    console.log("i = ",x);
}

//for in loop - it only return the keys name
const Product={
    name:"ball Pen",
    Rating : 4,
    isDeal:true,
    price:80,
 };
 for(let key in Product){
    console.log("key=",key);
 }

 //STRINGS
 let obj={
    item:"pen",
    price:20,
 };
 console.log("the cost of",obj.item,"is",obj.price);

 //Template Literal - Way to embedded all expression in string 
 let output=`the cost of ${obj.item} is ${obj.price} rupees.`;
 console.log(output);