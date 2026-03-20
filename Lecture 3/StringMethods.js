// String Methods in JS

// str.toUpperCase( )
let str1 = "Welcome To JavaScript !"
str1 =str1.toUpperCase();
console.log(str1);

// str.toLowerCase( )
let str2 = "Welcome To JavaScript !"
str2 = str2.toLowerCase();
console.log(str2);

// str.trim( ) // removes whitespaces
let str3 = "    Welcome To JavaScript !    ";
console.log(str3.trim());

// str.slice(start, end?) // returns part of string
let str4 = "Welcome";
console.log(str4.slice(1, 5));

// str1.concat( str2 ) // joins str2 with str1
let str5 = "Welcome ";
let str6 = "To JavaScript !";

// let res = str5.concat(str6);
// let res = str5 + str6;

// let res = "I am Learning coding from " + str5 + str6;

let res = " Hello " + 1234567;
console.log(res)

// str.replace( searchVal, newVal )
let str7 = "Hello";
console.log(str7.replace("lo","p"));

// str.charAt( idx )
let str8 = "ILoveJavaScript";
// console.log(str8.charAt(2));

// console.log(str8[0]);

// let str9= "ILoveJS"; this is unmuteble
str9[0] = "S";
str9 = str9.replace("I","S");
console.log(str9);