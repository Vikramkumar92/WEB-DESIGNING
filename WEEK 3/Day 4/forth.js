/*We collect and show the information of one thing by maing object. 
But ,for collection of things we make the ARRAY.
ARRAY - It is collection of item where info is stored in same data types.
*/
// var marks=[11,12,13,44,55]
// console.log(marks)
// console.log(marks.length)
// console.log(marks[2])
// marks[2]=55;
// console.log(marks);

/*Converting all the city in Uppercase*/
let cities=["Mumbai","Agra","Pune","Delhi"]
for(let city of cities){
    console.log(city.toUpperCase())
}

/*Ques - For a given array with marks of [85,97,44,37,76,60]. Find the avg marks of entire class*/
let marks=[85,97,44,37,76,60]
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
let avg=sum/marks.length;
console.log(`average marks of the clas is ${avg}`);

/*push - We can add one or more than one item in array in end.Ye existing array ke andr change krta h
Unshift -We can add one or more than one item in array in begining . */
let foodItems=["apple","potato","brinjal","tomato"];
foodItems.push("chips","burger","litchi");
foodItems.unshift("banana","watermelon")
console.log(foodItems);

/*pop  - We can delete the item from last  
Shift - We can delete the item from begining */
foodItems.pop();
foodItems.shift();
console.log(foodItems);


/*toString - Convert the array into string*/
console.log(foodItems.toString());
console.log(marks.toString());

/*Concat - to add two array  we use it*/
let mixedVersion=foodItems.concat(marks);
console.log(mixedVersion);

/*Slice - Return a piece of Array . here ending index is  excluded*/
console.log(foodItems.slice(1,5));

/*Splice - (startingidx, no, of index to be deleted, replace value)
if we don't want to add ,delete ,replace ny then put 0 on it */
marks.splice(1,3,65,80);
console.log(marks);

