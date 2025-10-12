//ARITHMETIC OPERATOR :

let a=5;
let b=2;
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a**b = ",a**b);

//preincr - phle value change hoga tb print hoga
console.log("++a = ",++a);    
//postincr - phle print hoga tb value change hoga
console.log("a++ = ",a++);
//postdecr - phle print hoga tb value change hoga
console.log("a-- = ",a--);
//predecr - phle value change hoga tb print hoga
console.log("--a = ",--a);
 

//ASSIGNMENT OPERATOR
a+=4;
console.log("a = ",a);
a-=4;
console.log("a = ",a);
a*=4;
console.log("a = ",a);
a/=4;
console.log("a = ",a);
a%=4;
console.log("a = ",a);


//COMPARISON OPERATOR
let x=15;
let y="15";
//in double equal to string is converted into number and then compared
console.log("x==y",x==y);   
// but in triple equal to all  things are checked
console.log("x===y",x===y);  
//It also include <,> <=,>= etc symbol for comparing


/*LOGICAL OPERATOR
LOGICAL AND - if all the given condition are true then it is true;
LOGICAL OR - If one of the condition is true then it is true;
LOGICAL NOT - it gives the inverse output.  */


/*CONDITIONAL STATEMENT - To implement some condition in the code
 If ,If-else,else-if and else if is used for multiple condition checking  */

let color;
let mode="dark";
if(mode==="dark"){
    color = "black";
}
if(mode==="light"){
    color = "white";
}
console.log(color);

// alert is like pop up and prompt is also like this but it can takes input also
// alert("Be careful!!");
// let name=prompt("hiii!!!");
// console.log(name);
prompt("hiii!!!");

