// Template Literals in JS
let specialString = `This is a template literal ${1+2+3}`;
console.log(specialString);

// why using by back tick let's example
let obj = {
    item: "pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price,"Rs.");

let output = `the cost of ${obj.item} is ${obj.price}rupees`;
console.log(output);

// escape caractor next space \n
console.log("Welcome\n To \nJavaScreept!");

// tabspace
console.log("Welcome \tTo \tJavaScript!")

// single char ki tarah count hoti he 
let SinglChar = "Welcome\tToJS";
console.log(SinglChar.length);