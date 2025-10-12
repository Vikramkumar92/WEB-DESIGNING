console.log("Hello world")

// document.body.firstElementChild 
// document.body.firstElementChild.childNodes 
// document.body.firstElementChild.children

// access by class name
let a =document.getElementsByClassName("box")
a[1].style.backgroundColor="red"

// access by id name
document.getElementById("greenbox").style.backgroundColor="green"

//It is used when one boxes should be colored 
document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

//It is used when all boxes should be colored  at one time with same color
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

