console.log("Welcome to java Script Code !");
console.log("Vikram Yadav");

/*Variables - It is like container which contain various values in it like str,int,float etc
Unlike HTML and CSS , it is case sensitive and follow variable rules like in C , CPP,JAVA etc.
*/
name="Vikram Yadav";
age =19;
console.log("name");     /*console.log me " " eske andr jo rhta h whi print ho jata h */
console.log(age);

/*Var - Variables can be redeclared and updated,so it creates  problem in  js bcoz has many lines.
Then we use LET AND CONST */
var age=15;
var age=28;
console.log(age);

/*let - Variables can't be redeclared but can be updated */
let x=25;
x=30;
console.log(x);

/*const - Variables neither be redeclared nor be updated */
const y=87;
const z=88;
console.log(y);
console.log(z);

/*DataTypes - yha BigInt , symbol extra aata h */
let a = 24;

/*Object is the collection of data types*/
const student={
    name:"Vikram",
    age:20,
    isPass:true,
    sgpa:6.5,
};
console.log(student)

/*How to update in Object*/
 student.age = student.age+4 ;

 /*Ques : Create a constant called Product and mention all the info */
 const Product={
    name:"ball Pen",
    Rating : 4,
    isDeal:true,
    price:80,
 };

 /*Concatenation Of two or more string */
 c="name"+"full";
 console.log(c);


