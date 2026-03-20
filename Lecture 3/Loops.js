// Loops in JS 
// Example  
//console.log("Welcome To JavaScript");
//console.log("Welcome To JavaScript");  
//console.log("Welcome To JavaScript") ;
//console.log("Welcome To JavaScript");
//console.log("Welcome To JavaScript") ; 
//console.log("Welcome To JavaScript");

// Using Loop Print 1 to 5
// for(let count = 1; count<= 5; count++){

//     console.log("Welcome To JavaScript")//5 execute
// };
// console.log("Loops has Ended");

//Calculate sum of first n number
// let sum = 0;
// for(let i = 1; i<= 5; i++){
//     sum = sum + i ;
    
// }
// console.log("Sum = ",sum);

// console.log("Loops has Ended");

// for(let i = 1; i <= 5; i++){
//     console.log("i = ",i)
// }

// Infinite Loop : A Loop That never ends
// for(let i = 1; i => 0; i++){
    //  console.log("i = ",i)
//  } ye kabi bi nahi krna he 

// While Loop
// let i = 1;
// while(i <= 5){
//     console.log("i = ",i);
//     i++;
// }

// let i = 1;
// while(i <= 10){
//     console.log("Welcome In Js!");
//     i++;
// }

// do-while Loops
// let i = 20 ;
// do {
//     console.log("Welcome in Js.")
// }while(i <= 10);
// let i = 1 ;
// do {
//     console.log("Welcome in Js. = ",i);
// }while(i <= 5);

// let i = 1;
// do {
//     console.log("Welcome in Js. = ", i);
//     i++;
// } while(i <= 5);


// for-of   loops

// let str = "Welcome in JS";

// for(let i of str){
//     console.log("i = ",i);// iterator --> charecters
// }
// console.log("End Of the loop");

// let str1 = "JavaScript";
// let size = 0;

// for(let i of str1){
//     console.log("i = ",i);
//     size++;
// };
// console.log("String Size = ",size);

// for-in loops
let student={
    name: "Vikas Kumar",
    age : 25 ,
    cpga : 7.5,
    isPass : true

};
for(let key in student){
    console.log("Key = ",key, "Value = ", student[key]);
}