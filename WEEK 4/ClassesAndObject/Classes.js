//Object is an entity having state and behaviour(properties and methods)
//Object have a special property callled prototype.
const student={
    fullName:"Vikram Yadav",
    marks:60,
    printMarks:function(){
        console.log("marks is ",this.marks); //here this refers to present object
    },
};
const employee={
    calcTax(){
        console.log("tax rate is 10%");
    }
}
const karan={
    salary:40000
}
const Arjun={
    salary:50000,
    calcTax(){
        console.log("Tax Rate is 20%");
    }
}

//If we want to access prop. of one obj. into another obj. then we use:
karan.__proto__=employee;
Arjun.__proto__=employee;

//Class - It is a template for object or we can say that it is a bluprint for object.
//Constructor - It is a special type of object which is automatically invoked by initializing new object.
class toyotaCar{
    constructor(){
        console.log("creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrandName(){
        this.brandName=brand
    }
}
let Fortuner=new toyotaCar();  //
let lexus=new toyotaCar();

//Inheritance - It is the property which passes to the child from its parent.
class parent{
    hello(){
        console.log("Hello , How are you");
    }
}
class child extends parent{
    nature(){
        console.log("He is wicked");
    }
}
let rakesh=new parent();
let ram = new child();
